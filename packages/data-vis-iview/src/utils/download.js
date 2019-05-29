import XLSX from 'xlsx';
import FileSaver from 'file-saver';

const aoaToSheet = XLSX.utils.aoa_to_sheet;
const saveAs = FileSaver.saveAs;
function s2ab(s) {
    if (typeof ArrayBuffer !== 'undefined') {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i !== s.length; ++i) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    }
    let buf = new Array(s.length);
    for (let i = 0; i !== s.length; ++i) {
        buf[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
}

export const xlsDownload = function (data, name) {
    let wopts = {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary'
    };
    let ws = aoaToSheet(data);
    let wb = {
        SheetNames: ['Export'],
        Sheets: {},
        Props: {}
    };
    wb.Sheets.Export = ws;
    let wbout = XLSX.write(wb, wopts);
    saveAs(
        new Blob(
            [s2ab(wbout)],
            {
                type: 'application/octet-stream'
            }
        ),
        name + '.xlsx' || 'sheetjs.xlsx'
    );
};
