<template>
    <div>
        <div id="timecontainer" class="timecontainer" @mousedown="mousedownfn">
            <div class="selectall"> <input id="selectAllid" type="checkbox" @click="selectAllornot"><label for="selectAllid" style="cursor:pointer;padding-left:5px;">全选</label></div>
            <div class="righttips">
                <div class="tiplist">
                    <span class="current" />投放
                </div>
                <div class="tiplist">
                    <span />不投放
                </div>
            </div>
            <div class="swrap">
                <div class="leftweek">
                    <div v-for="(item,index) in weekName" :key="index" class="weekname">{{ item }}</div>
                </div>
                <div class="mainbox">
                    <div class="bottomtime">
                        <div v-for="(item,index) in timeName" :key="index" class="timeList">{{ item }}</div>
                    </div>
                    <div class="boxlist">
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
function getTimeArray() {
    let timeArray = [];
    for (let i = 0; i < 24 * 7; i++) {
        timeArray.push('0');
    }
    return timeArray.join('');
}
export default {
    data() {
        return {
            weekName: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            timeName: ['00:00~11:00', '12:00~23:00'],
            timeList: getTimeArray().split(''),
            isSelect: true,
            timeSetp: 1,
            selectBoxDashed: null,
            startX: null,
            startY: null,
            initx: null,
            scrollX:null,
            scrollY:null,
            inity: null
        };
    },
    mounted () {
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
            // console.log(this.startX, this.starty);
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
            // console.log(this.initx, this.inity);
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
                let itemX_pos = fileDivs[i].offsetWidth + fileDivs[i].offsetLeft;
                let itemY_pos = fileDivs[i].offsetHeight + fileDivs[i].offsetTop;
                // console.log(itemX_pos, itemY_pos, this.left);
                let condition1 = itemX_pos > this.left;
                let condition2 = itemY_pos > this.top;
                let condition3 = fileDivs[i].offsetLeft < (this.left + this.width);
                let condition4 = fileDivs[i].offsetTop < (this.top + this.height);
                // console.log(condition1, condition2, condition3,condition4);
                if (condition1 && condition2 && condition3 && condition4) {
                    // console.log(fileDivs[i].classList);
                    fileDivs[i].classList.add('temp-selected');
                } else {
                    fileDivs[i].classList.remove('temp-selected');
                }
            }
            this.clearBubble(e);
        },
        mouseUpfn(e) {
            document.getElementById('timecontainer').removeEventListener('mousemove', this.mousemovefn);
            let selectDom = document.getElementsByClassName('temp-selected');
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
            // eslint-disable-next-line no-console
            // console.log(this.timeList.join(''));
            this.$emit('triggertime', this.timeList.join(''));
            this.clearBubble(e);
        },
        setcurrent(item, index) {
            if (item == 0) {
                this.timeList.splice(index, 1, '1');
            } else {
                this.timeList.splice(index, 1, '0');
            }
        },
        selectAllornot(e) {
            this.timeList.forEach((item, index) => {
                this.timeList.splice(index, 1, Number(e.target.checked));
            });
            // console.log(this.timeList.join(''));
            this.$emit('triggertime', this.timeList.join(''));
        }
    }
};
</script>
<style  scoped>
.timecontainer{width:320px;overflow: hidden;padding-top:30px;}
.swrap{width:320px;overflow: hidden;}
.leftweek{display: inline-block;width:50px;vertical-align: top;margin-top:24px;}
.leftweek .weekname{width:50px;height:17px;line-height:25px;text-align: center;font-size:12px;}
.mainbox{display: inline-block;vertical-align: middle;padding: 10px 0px 2px 10px; width: 258px;overflow: hidden; background-color:#F5F5F5; }
.boxlist{overflow: hidden;}
.boxlist .list{float:left;height: 15px;width:10px;border: 1px solid #999; border-radius: 2px; cursor: pointer;background-color: #fff;}
.boxlist .list.selected{background-color:#0099ff;border-color:#0099ff}
.selectall{float:left;font-size:12px;margin-left:50px;}
.righttips{font-size:12px;float: right;}
.righttips .tiplist{display: inline-block;margin-right:10px;}
.righttips .tiplist span{display: inline-block;width:10px;height:10px;border:1px solid #999;margin-right:3px;}
.righttips .tiplist span.current{ background: #43a9ed;border-color: #43a9ed;}
.timeList{display: inline-block;vertical-align: middle;font-size:12px;width:120px;text-align: center}
</style>
<style>
.select-box-dashed{position: absolute;display: none;width: 0px;height: 0px;
    padding: 0px; margin: 0px;border: 1px dashed #0099ff;
    background-color: #c3d5ed;opacity: 0.5;filter: alpha(opacity=50);font-size: 0px;z-index: 99999;
}
</style>

