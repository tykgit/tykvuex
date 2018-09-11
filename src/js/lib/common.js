/**
 * Created by Administrator on 2018/2/24.
 */
var common = {
    checkBed:function(itme){
        var bedChecks = $('.bedCheck');
        var itme = $(itme);
        var newitem = itme.find('input');
        if(newitem.prop('checked')== true){
            newitem.prop('checked',false);
        }else {
            bedChecks.prop('checked',false);
            newitem.prop('checked',true);
        }
    },
    /*本地*/
    // httpHearder1:'http://192.168.31.66:8080/simba',//田
     httpHearder1:'http://192.168.31.197:8080/simba',//邱
    // httpHearder1:'http://192.168.31.117:8080',
    //httpHearder1:'http://192.168.31.66:8080/simba',//田
    //httpHearder1:'http://192.168.31.27:8080'//王
    //httpHearder1:'http://192.168.31.66:8080',//田
    //httpHearder1:'http://192.168.31.50:8080',//杨
    //httpHearder1: 'http://test-health.vita-course.com/simba'//测试
    // httpHearder1: 'http://health.vita-course.com/simba'//正式


};


/**
 *校验  //value：控件值  id：控件名，如 '#name'  msg：如：'请输入正确的...!'
 */
// 姓名
function verifyName(value,id) {
    var regular=/^[\u4E00-\u9FA5A-Za-z0-9]+$/;
    if (value == "" || value == null) {
        showMessage('请输入姓名！',id);
        return false;
    }
    if (value.length > 10 || !regular.test(value)) {
        showMessage('请输入正确的姓名！',id);
        return false;
    }
    return true;
}
// 性别
function verifySex(value,id) {
    if (value !=107 && value !=108) {
        showMessage('请选择性别！',id);
        return false;
    }
    return true;
}
// 身高
function verifyHeight(value,id) {
    if (value == "" || value == null) {
        showMessage('请输入身高！',id);
        return false;
    }
    if (value <'80'|| value > '300'){
        showMessage('请输入正确的身高(80~300cm)',id);
        return false;
    }
    return true;
}
// 体重
function verifyWeight(value,id) {
    if (value == "" || value == null) {
        showMessage('请输入体重！',id);
        return false;
    }
    if (value < '20'||value > '200'){
        showMessage('请输入正确的体重(20.0~200.0kg)',id);
        return false;
    }
    return true;
}
// 联系方式 座机+手机
function verifyContact(value,id) {
    var tele=/^((0\d{2,3}(-)?\d{7,8})|(1[35784]\d{9}))$/;
    // if (value!=''){//不为必填时
    if (!tele.test(value)){
        showMessage('请输入正确的联系方式！',id);
        return false;
    }
    return true;
    // }
}
// 手机号码
function verifyPhone(value,id) {
    var regular=/^(1[34578]\d{9})$/;
    if(value == "" || value == undefined){
        showMessage('请输入手机号码！',id);
        return false;
    }
    if(!regular.test(value)){
        showMessage('请输入正确的手机号码！',id);
        return false;
    }
    return true;
}

// 日期
function verifyDate(value,id) {
    if (value == "" || value == null) {
        showMessage('请选择日期！',id);
        return false;
    }
    return true;
}

//身份证  一代身份证号是15位的数字，二代身份证都是18位的，最后一位校验位除了可能是数字还可能是‘X‘或‘x‘，所以有四种可能性：a.15位数字 b.18位数字 c.17位数字，第十八位是‘X‘ d.17位数字，第十八位是‘x‘
function verifyIDcard(value,id) {
    var regular = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(!regular.test(value)){
        showMessage('请输入正确的身份证号码！',id);
        return false;
    }
    return true;
}

//数字
function verifyNumber(value, id, msg) {
    var regular=/^[0-9]*$/;
    if (!regular.test(value)){
        showMessage(msg,id);
        return false;
    }
    return true
}


//中文
function verifyChinese(value,id,msg) {
    var regular=/^[\u4e00-\u9fa5]*$/;
    if (!regular.test(value)){
        showMessage(msg,id);
        return false;
    }
    return true;
}



//layer.tip
function showMessage(msg, id) {
    layer.tips("<span style='color: white'>"+msg+"</span>",id,{tips:[2,'#000']});//提示框位置 1:在上面 2：在右边（默认） 3：在下面
}

// 一位小数
function decimal(obj){
    obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符  /[\d.]/
    obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字而不是
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3'); //只能输入一个小数
}

Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};