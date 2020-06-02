<template>
    <div :class="classes">
        <div id="timecontainer" class="timecontainer" @mousedown="mousedownfn">
            <div class="swrap">
                <div class="leftweek">
                    <div v-for="(item,index) in computedyAxisName" :key="index" class="weekname">{{ item }}</div>
                </div>
                <div class="mainbox">
                    <div class="selectall">
                        <input id="selectAllid" type="checkbox" @click="selectAllornot">
                        <label for="selectAllid" style="cursor:pointer;padding-left:5px;">全选</label>
                    </div>
                    <div class="righttips">
                        <div v-for="(item,index) in computedTipName" :key="index" class="tiplist">
                            <span :class="{'current': !index}" />{{ item }}
                        </div>
                    </div>
                    <div class="bottomtime">
                        <div v-for="(item,index) in computedxAxisName" :key="index" class="timeList">{{ item }}</div>
                    </div>
                    <div class="boxlist" :style="itemStyleWidth">
                        <div
                            v-for="(item,index) in timeList"
                            :key="index"
                            class="list"
                            :title="`${timeSetp}小时`"
                            :class="{selected:item==1}"
                            @click="setcurrent(item,index)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';
export default {
    inject: ['form'],
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isSelect: true,
            timeSetp: 1,
            selectBoxDashed: null,
            startX: null,
            startY: null,
            initx: null,
            scrollX: null,
            scrollY: null,
            inity: null
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        itemStyleWidth() {
            let width = this.field.width;
            // 兼容老版本的字符串数值，如果是数值字符串，则转为int
            if (typeof width === 'string' && /^\d+$/.test(width)) {
                width = parseInt(width);
            }
            return {
                width: typeof width === 'string' ? width : width + 'px'
            };
        },
        timexAxisNum() {
            return this.field.xAxisNum || 24;
        },
        timeyAxisNum() {
            return this.field.yAxisNum || 7;
        },
        computedTipName() {
            return this.field.tipsName || [];
        },
        computedyAxisName() {
            return this.field.yAxisName || [];
        },
        computedxAxisName() {
            return this.field.xAxisName || [];
        },
        computedTimeArray() {
            let timeArray = [];
            for (let i = 0; i < this.timexAxisNum * this.timeyAxisNum; i++) {
                timeArray.push('0');
            }
            return timeArray.join('');
        },
        computedValue () {
            return getValue({
                originModel: this.form.model,
                model: this.field.model
            }) || '';
        },
        timeList() {
            return this.computedValue !== '' ? this.computedValue.split('') : this.computedTimeArray.split('');
        }
    },
    mounted() {
        // eslint-disable-next-line no-console
        // console.log(this.timeList);
    },
    methods: {
        clearBubble(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        mousedownfn(e) {
            //  创建选框节点
            this.selectBoxDashed = document.createElement('div');
            this.selectBoxDashed.className = 'select-box-dashed';
            document.body.appendChild(this.selectBoxDashed);
            this.scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
            this.scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            
            //  设置选框的初始位置
            this.startX = e.x + this.scrollX || e.clientX + this.scrollX;
            this.startY = e.y + this.scrollY || e.clientY + this.scrollY;
            this.selectBoxDashed.style.cssText = `left:${this.startX}px;top:${this.startY}px`;
            //  清除事件冒泡、捕获
            this.clearBubble(e);
            document.getElementById('timecontainer').addEventListener('mousemove', this.mousemovefn);
            document.body.addEventListener('mouseup', this.mouseUpfn);
        },
        mousemovefn(e) {
            //  设置选框可见
            this.selectBoxDashed.style.display = 'block';
            //  根据鼠标移动，设置选框的位置、宽高
            this.initx = e.x + this.scrollX || e.clientX + this.scrollX;
            this.inity = e.y + this.scrollY || e.clientY + this.scrollY;
            //  暂存选框的位置及宽高，用于将 select-item 选中
            this.left = Math.min(this.initx, this.startX);
            this.top = Math.min(this.inity, this.startY);
            this.width = Math.abs(this.initx - this.startX);
            this.height = Math.abs(this.inity - this.startY);
            this.selectBoxDashed.style.left = `${this.left}px`;
            this.selectBoxDashed.style.top = `${this.top}px`;
            this.selectBoxDashed.style.width = `${this.width}px`;
            this.selectBoxDashed.style.height = `${this.height}px`;
            let fileDivs = document.getElementsByClassName('list');
            for (let i = 0; i < fileDivs.length; i++) {
                let itemX_pos = fileDivs[i].getBoundingClientRect().left + this.scrollX;
                let itemY_pos = fileDivs[i].getBoundingClientRect().top + this.scrollY;
                let condition1 = itemX_pos + fileDivs[i].offsetWidth > this.left;
                let condition2 = itemY_pos + fileDivs[i].offsetHeight > this.top;
                let condition3 = itemX_pos < this.left + this.width;
                let condition4 = itemY_pos < this.top + this.height;
                if (condition1 && condition2 && condition3 && condition4) {
                    fileDivs[i].classList.add('temp-selected');
                } else {
                    fileDivs[i].classList.remove('temp-selected');
                }
            }
            this.clearBubble(e);
        },
        mouseUpfn(e) {
            let timecontainer = document.getElementById('timecontainer');
            if (timecontainer !== null) {
                timecontainer.removeEventListener('mousemove', this.mousemovefn);
            }            let selectDom = document.getElementsByClassName('temp-selected');
            [].slice.call(selectDom).forEach(item => {
                if (item.classList.contains('selected')) {
                    item.classList.remove('selected');
                } else {
                    item.classList.add('selected');
                }
                item.classList.remove('temp-selected');
            });
            if (this.selectBoxDashed) {
                try {
                    this.selectBoxDashed.parentNode.removeChild(this.selectBoxDashed);
                } catch (err) {
                // console.log(err)
                }
            }
            let fileDivs = document.getElementsByClassName('list');
            for (let i = 0; i < fileDivs.length; i++) {
                if (fileDivs[i].classList.contains('selected')) {
                    this.timeList[i] = '1';
                } else {
                    this.timeList[i] = '0';
                }
            }
            this.$emit('on-change', this.field.model, this.timeList.join(''), null, this.field);
            this.clearBubble(e);
        },
        setcurrent(item, index) {
            if (item == 0) {
                this.timeList.splice(index, 1, '1');
            } else {
                this.timeList.splice(index, 1, '0');
            }
            this.$emit('on-change', this.field.model, this.timeList.join(''), null, this.field);
        },
        selectAllornot(e) {
            this.timeList.forEach((item, index) => {
                this.timeList.splice(index, 1, Number(e.target.checked));
            });
            // console.log(this.timeList.join(''));
            this.$emit('on-change', this.field.model, this.timeList.join(''), null, this.field);

        }
    }
};
</script>
<style>
.timecontainer {
    min-width: 500px;
    overflow: hidden;
    padding-top: 30px;
}
.swrap {
    min-width: 500px;
    overflow: hidden;
}
.leftweek {
    display: inline-block;
    width: 50px;
    vertical-align: top;
    margin-top: 72px;
}
.leftweek .weekname {
    width: 50px;
    height: 17px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
}
.mainbox {
    display: inline-block;
    vertical-align: middle;
    padding: 10px 15px 2px 15px;
    overflow: hidden;
    background-color: #f5f5f5;
}
.boxlist {
    border-right: 1px solid #999;
    border-bottom: 1px solid #999;
    overflow: hidden;
}
.boxlist .list {
    float: left;
    height: 17px;
    width: 17px;
    border: 1px solid #999;
    border-right: none;
    border-bottom: none;
    cursor: pointer;
    background-color: #fff;
}
.boxlist .list.selected {
    background-color: #0099ff;
    border-color: #0099ff;
}
.selectall {
    float: left;
    font-size: 12px;
}
.bottomtime {
    clear: both;
}
.righttips {
    font-size: 12px;
    float: right;
}
.righttips .tiplist {
    display: inline-block;
    margin-right: 10px;
}
.righttips .tiplist span {
    display: inline-block;
    position: relative;
    top: 3px;
    width: 17px;
    height: 17px;
    background: #fff;
    border: 1px solid #999;
    margin-right: 3px;
}
.righttips .tiplist span.current {
    background: #43a9ed;
    border-color: #43a9ed;
}
.timeList {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    width: 17px;
    text-align: center;
}
.select-box-dashed {
    position: absolute;
    display: none;
    width: 0px;
    height: 0px;
    padding: 0px;
    margin: 0px;
    border: 1px dashed #0099ff;
    background-color: #c3d5ed;
    opacity: 0.5;
    filter: alpha(opacity=50);
    font-size: 0px;
    z-index: 99999;
}
</style>

