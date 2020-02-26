var schedule_id;
var extract_id_name;
var flag = 0;
var rem = 3;
var req_start_flag = 0;
var req_content_flag = 0;
var paidtime_flag = 0;
var empty_flag = 0;
var edit_flag = 0;
var edit_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// toggling between month,week,day, month=0, week=1, day=2;
var week_day_month_selected = 0;
var month_selected = 3;
var week_selected = 0;
var day_selected = 0;

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
setTimeout(function() {
    $('[data-toggle="tooltip"]').tooltip('enable');
}, 3000);

function ShowHideDiv_Sc() {}

function ShowHideDiv_AA() {}

function ShowHideDiv_Se() {}

function monthhref() {
    week_day_month_selected = 0;
}

function weekhref() {
    week_day_month_selected = 1;
}

function dayhref() {
    week_day_month_selected = 2;
}

// toggle between months weeks days in top arrows
function next_month_week_day() {
    switch(week_day_month_selected) {
        case 0:
            if (month_selected > 0 && month_selected < 11) {
            month_selected++
            }
          break;
        case 1:
            
          break;
        default:
            schedule_id = null;
      }
      
      switch (month_selected) {
        case 2:
            document.getElementById("chosen_month").innerHTML = "March 2019"
            $('.second_member').toggle()
            $('.fifth_member').toggle()
          //   $('.april').show();
            break;
          case 3:
              document.getElementById("chosen_month").innerHTML = "April 2019"
              $('.second_member').show()
              $('.fifth_member').show()
            //   $('.april').show();
              break;
          case 4:
            document.getElementById("chosen_month").innerHTML = "May 2019";
            $('.second_member').toggle()
            $('.fifth_member').toggle()

            // document.getElementsByClassName('.schedule-set-btn second_member').style.display = "none";
            // $('.may').show();
            // $('.april').hide();
            break;
            default:
                null
      }
}

function prev_month_week_day() {
    switch(week_day_month_selected) {
        case 0:
            if (month_selected > 0){
            month_selected--
            console.log(month_selected)
            }
          break;
        case 1:
            
          break;
        default:
            schedule_id = null;
      }
      switch (month_selected) {
        case 2:
            document.getElementById("chosen_month").innerHTML = "March 2019"
            $('.second_member').toggle()
            $('.fifth_member').toggle()
          //   $('.april').show();
            break;
        case 3:
            document.getElementById("chosen_month").innerHTML = "April 2019";
            $('.second_member').show()
            $('.fifth_member').show()
            // $('.april').show();
            // $('.may').hide();
            break;
        case 4:
          document.getElementById("chosen_month").innerHTML = "May 2019";
          $('.second_member').toggle()
          $('.fifth_member').toggle()
          break;
          default:
              null
    }
}

function edi_sch() {
    add_shift.style.display = "inline-block";
    spe_week.style.display = "inline-block";
    pn.style.display = "inline-block";
    sel_emp.style.display = "inline-block";
    pub_btn.style.display = "inline-block";
    save_btn.style.display = "inline-block";
    exit_btn.style.display = "inline-block";
    edi_sch_btn.style.display = "none";
    gen_sch_btn.style.display = "none";
    users_btn.style.display = "none";
}
//
// function exit() {
//     edit_flag = 0;
//     var i;
//     var j = 0;
//     var id;
//     var str1 = "first_member_";
//     var res;
//     // for (i = 0; i < 31; i++) {
//     //     if (edit_data[i] == 0) {
//     //         j = i + 1;
//     //         res = str1.concat(j);
//     //         id = document.getElementById(res);
//     //         id.style.display = "none";
//     //         j = 0;
//     //     }
//     // }
//
//     responsive_btn_group.classList.add("ml-auto");
//     spe_week.style.display = "none";
//     pn.style.display = "none";
//     sel_emp.style.display = "none";
//     pub_btn.style.display = "none";
//     save_btn.style.display = "none";
//     exit_btn.style.display = "none";
//     add_shift.style.display = "none";
//     edi_sch_btn.style.display = "inline-block";
//     gen_sch_btn.style.display = "inline-block";
//     // users_btn.style.display = "inline-block";
//
//     let editables = document.querySelectorAll('.editable');
//     for(let n = 0; n < editables.length; n++){
//         editables[n].style.display = "none";
//     }
//     document.querySelector('.schedule-dot-pre-btn').style.display = "none";
//     editState = false;
// }

function exit() {
    edit_flag = 0;
    var i;
    var j = 0;
    var id;
    var str1 = "first_member_";
    var res;
    // for (i = 0; i < 31; i++) {
    //     if (edit_data[i] == 0) {
    //         j = i + 1;
    //         res = str1.concat(j);
    //         id = document.getElementById(res);
    //         id.style.display = "none";
    //         j = 0;
    //     }
    // }
    let unmarkedOnes = document.querySelectorAll('.schedule-pre-btn:not(.first_member)');
    for(let i = 0; i < unmarkedOnes.length; i++){
        unmarkedOnes[i].style.opacity = "0";
    }
    responsive_btn_group.classList.add("ml-auto");
    spe_week.style.display = "none";
    pn.style.display = "none";
    sel_emp.style.display = "none";
    pub_btn.style.display = "none";
    save_btn.style.display = "none";
    exit_btn.style.display = "none";
    edi_sch_btn.style.display = "inline-block";
    document.getElementById("publish-mobile-label").style.display = "none";
    gen_sch_btn.style.display = "inline-block";
    document.getElementById('add_shift').style.display = "none";
    // users_btn.style.display = "inline-block";
    editState = false;
    document.getElementById("tip").style.display = "none";
}

function exit_add() {
    add_shift.style.display = "none";
    spe_week.style.display = "none";
    pn.style.display = "none";
    sel_emp.style.display = "none";
    pub_btn.style.display = "none";
    save_btn.style.display = "none";
    exit_btn.style.display = "none";
    edi_sch_btn.style.display = "inline-block";
    gen_sch_btn.style.display = "inline-block";
    users_btn.style.display = "inline-block";
}

function textarea_show() {
    mycomment.style.display = "block";
}
function textarea_hide() {
    mycomment.style.display = "none";
}


function panelhide() {
    verification_view.style.display = "none";
    document.getElementById("schedule_edit").style.boxShadow = "10px 15px 10px #ddd";
}

function veri_view() {
    if (rem === 0) {
        $("#locationmodal").modal();
        $('[data-toggle="tooltip"]').tooltip('hide');
    } else {
        $('[data-toggle="tooltip"]').tooltip('show');
    }
}

function showdelcof() {
    delautoconf.style.display = "inline";
}

function hidedelcof() {
    delautoconf.style.display = "none";
}

function showadjconf() {
    adjautoconf.style.display = "inline";
}

function hideadjconf() {
    adjautoconf.style.display = "none";
}

function showshift_view() {
    totalhandled_shift.style.display = "inline";
    shift_view_tb.style.display = "block";
    totalhandled_hoursadj.style.display = "none";
    hoursadj_view_tb.style.display = "none";
}

function showhoursadj_view() {
    totalhandled_hoursadj.style.display = "inline";
    hoursadj_view_tb.style.display = "block";
    totalhandled_shift.style.display = "none";
    shift_view_tb.style.display = "none";
}

function init_generation() {
    window.location.href = 'fix2.html';
}

function init_edit() {
    edit_flag = 1;
    window.location.href = 'fix3_5.html';
}

function fisical_year_() {
    window.location.href = 'fix7_8.html';
}

function to_fix12() {
    window.location.href = 'fix12.html';
}

function display_change_config(event, clicked_id) {

    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
            document.getElementById("req_delete_content_01_panel").setAttribute( "onClick", "hide_req_rightsidediv()" ) ;
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
            document.getElementById("req_adjust_content_01_panel").setAttribute( "onClick", "hide_req_rightsidediv()" );
          break;
        case 2:
            document.getElementById("req_paidtime_content_01_panel").setAttribute( "onClick", "hide_req_rightsidediv()" );
          break;
        default:
            schedule_id = null;
      }
      if (month_selected !== 3) {
        month_selected = 3
        document.getElementById("chosen_month").innerHTML = "April 2019";
        $('.second_member').show()
        $('.fifth_member').show()
    }

      schedule_id.style.boxShadow = "0 0 0 2px black"

    // if ($('.panel').css('background', '#F9F9F9')) {
    //     $('.panel').css('background', '#FFF');
    // }
    if (req_start_flag == 1) {
        $('.panel').css('background', '#F9F9F9');
        flag = 3;
        // hidediv.style.display = "block";
        div_change_shift_position.style.display = "block";
        var x = event.clientX;
        var y = event.clientY;
        var w = window.innerWidth;
        var h = window.innerHeight;
        var tempx = x + 300;
        if (w > tempx) {
            div_change_shift_position.style.left = x + 'px';
        }
        if (w<tempx) {
            x = x - 300;
            div_change_shift_position.style.left = x + 'px';
        }
        var tempy=y+442;
        if(h>tempy){
            div_change_shift_position.style.top = y + 'px';
        }
        if(h<tempy){
            div_change_shift_position.style.top = '80px';
        }
        if (w < 580) {
            w = (w - 300)/2;
            div_change_shift_position.style.left = w + 'px';
            div_change_shift_position.style.top = '80px';
        }
        schedule_id = document.getElementById(clicked_id);
        schedule_id.classList.add('clickedBorder');
        extract_id_name = clicked_id;
        if (extract_id_name == "first_member_01") {
            req_content_flag = 0;
        }
        if (extract_id_name == "first_member_09") {
            req_content_flag = 1;
        }
        show_div_request();
    }

    
}

function delete_change_shift(event, clicked_id) {
    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
          break;
        default:
            schedule_id = null;
      }
    
    schedule_id.style.display = "none";
    div_change_shift_position.style.display = "none";
    hidediv.style.display = "none";
    $('.panel').css('background', 'white');
}

function save_change_shift() {
    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
          break;
        default:
            schedule_id = null;
      }
    schedule_id.classList.add("schedule-set-btn");
    schedule_id.style.display = "block";
    schedule_id.classList.remove("schedule-req-btn", 'clickedBorder');
    div_change_shift_position.style.display = "none";
    hidediv.style.display = "none";
    $('.panel').css('background', 'white');
}

function hide_req_rightsidediv() {
    div_request_id.style.display = "none"
    req_start_flag = 0;
    approve_01.style.display = "none";
    unapprove_01.style.display = "none";
    td_first_10.classList.remove("time_off_background");
    td_first_11.classList.remove("time_off_background");
    td_first_12.classList.remove("time_off_background");
    td_first_13.classList.remove("time_off_background");
    td_first_14.classList.remove("time_off_background");
    td_first_15_19.classList.remove("time_off_background");
    first_member_01.classList.add("schedule-set-btn");
    first_member_01.classList.remove("schedule-req-btn");
    first_member_09.classList.add("schedule-set-btn");
    first_member_09.classList.remove("schedule-req-btn");

    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
            schedule_id.style.boxShadow = "none"
            div_change_shift_position.style.display = 'none'
            document.getElementById("req_delete_content_01_panel").setAttribute( "onClick", "display_change_config()" );
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
            schedule_id.style.boxShadow = "none"
            div_change_shift_position.style.display = 'none'
            document.getElementById("req_adjust_content_01_panel").setAttribute( "onClick", "display_change_config()" );
          break;
        case 2:
                document.getElementById("req_paidtime_content_01_panel").setAttribute( "onClick", "show_reqPaidtime()" );
          break;
        default:
            schedule_id = null;
      }

      $('.panel').css('background', 'white');

    
}

schedule_id = [];
function display_add_config(event, clicked_id) {
    // if (edit_flag > 1) {
    //     div_add_shift_position.style.display = "block";
    //     hidediv.style.display = 'block';
    //     flag = 1;
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     var w = window.innerWidth;
    //     var temp = x + 300;
    //     if (w > temp) {
    //         div_add_shift_position.style.left = x + 'px';
    //         div_add_shift_position.style.top = '80px';
    //     }
    //     if (w < temp) {
    //         x = x-300;
    //         div_add_shift_position.style.left = x + 'px';
    //         div_add_shift_position.style.top = '80px';
    //     }
    //     if (w < 580) {
    //         w = (w - 300)/2;
    //         div_add_shift_position.style.left = w + 'px';
    //         div_add_shift_position.style.top = '30px';
    //     }
    //      else {
    //         x = x - 310;
    //         div_add_shift_position.style.left = x + 'px';
    //     }
    // }
    //     y = y - 90;
        
        

        schedule_id.push(document.getElementById(clicked_id));
        // schedule_id = document.getElementById(clicked_id);
        extract_id_name = clicked_id;
        // if(editState === true){
        event.target.classList.toggle('selected');
        event.target.classList.toggle('editable');
        // scheduleBtns[n].classList.toggle('selected');
        // scheduleBtns[n].classList.toggle('editable');
        // }
    edit_flag += 1;
    // }
}
function display_add_config_final(event) {
    if (edit_flag >= 1) {
        div_add_shift_position.style.display = "block";
        hidediv.style.display = 'block';
        document.body.style.overflow = 'hidden';
        flag = 1;
        var x = event.clientX;
        var y = event.clientY;
        var w = window.innerWidth;
        var temp = x + 300;
        if (w > temp) {
            div_add_shift_position.style.left = x + 'px';
            div_add_shift_position.style.top = '60px';
        }
        if (w < temp) {
            x = x - 300;
            div_add_shift_position.style.left = x + 'px';
            div_add_shift_position.style.top = '60px';
        }
        if (w < 580) {
            w = (w - 300) / 2;
            div_add_shift_position.style.left = w + 'px';
            div_add_shift_position.style.top = '20px';
        }
        // if (windows zoma < tviton am boxis zomaze) {
        //     div_add_shift_position.style.top = '0px';
        // }
        console.log('tacos')
        // schedule_id = document.getElementById(clicked_id);
        // extract_id_name = clicked_id;
    }
}



// function shift_activated() {
//     div_add_shift_position.style.display = "none";
//     // schedule_id.style.border = "none";
//
//     // var index = extract_id_name.indexOf('member');
//     // index = index + 6;
//     // var strOut = extract_id_name.substr(0, index);
//     // schedule_id.classList.add(strOut);
//     // var date = extract_id_name.substr(extract_id_name.length - 2);
//     // edit_data[date - 1] = 1;
//     hidediv.style.display = "none";
//     let selectedDots = document.querySelectorAll(".schedule-pre-btn.selected");
//     for(let i = 0; i < selectedDots.length; i++){
//         selectedDots[i].classList.add('picked');
//         console.log(selectedDots[i])
//     }
// }

function shift_activated() {
    div_add_shift_position.style.display = "none";
    div_edit_shift_position.style.display ="none"

    // schedule_id.style.border = "none";
    var index = extract_id_name.indexOf('member');
    index = index + 6;
    var strOut = extract_id_name.substr(0, index);
    // schedule_id.classList.add(strOut);

    var date = extract_id_name.substr(extract_id_name.length - 2);
    edit_data[date - 1] = 1;
    hidediv.style.display = "none";
    for(let i = 0; i < schedule_id.length; i++){
        schedule_id[i].style.border = "none";
        schedule_id[i].classList.add(strOut, 'chosen');
        console.log(schedule_id[i]);
        schedule_id[i].setAttribute("onClick", "display_edit_shift()")
    }
    document.body.style.overflow = "initial";
}

function display_edit_shift() {
    document.getElementById("div_edit_shift_position").style.display = 'block'
}

function hide_div_add_shift() {
    div_add_shift_position.style.display = "none";
    hidediv.style.display = "none";
    document.body.style.overflow = 'initial';
    cancel_template();
}

function hide_div_edit_shift() {
    div_edit_shift_position.style.display = "none";
    hidediv.style.display = "none";
    document.body.style.overflow = 'initial';
    cancel_template();
}

function show_employee_directory(event) {
    flag = 2;
    hidediv.style.display = "block";
    var w = window.innerWidth;
    var divw = employee_directory.offsetWidth;
    employee_directory.style.display = "block";
    if (w > 1200) {
        employee_directory.style.right = '440px';
        employee_directory.style.top = '150px';
    }
    if (w > 480 && w < 1200) {
        employee_directory.style.right = (w / 2) - (235) + 'px';
        employee_directory.style.top = '150px';
    }
    if (w < 480) {
        employee_directory.style.right = (w / 2) - (150) + 'px';
        employee_directory.style.top = '20px';
    }
}

function hide_div_employee_directory() {
    employee_directory.style.display = "none";
    hidediv.style.display = "none";
}

function confirm_employee() {
    employee_directory.style.display = "none";
    hidediv.style.display = "none";
}

function show_div_request() {
    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
          break;
        default:
            schedule_id = null;
      }

      

    div_request_id.style.display = "block";
    req_start_flag = 1;
    if (req_content_flag == 0) {
        req_delete_content_01.style.display = "block";
        req_adjust_content_01.style.display = "none";
        req_paidtime_content_01.style.display = "none";
    }
    if (req_content_flag == 1) {
        req_delete_content_01.style.display = "none";
        req_adjust_content_01.style.display = "block";
        req_paidtime_content_01.style.display = "none";
    }
    if (req_content_flag == 2) {
        req_delete_content_01.style.display = "none";
        req_adjust_content_01.style.display = "none";
        req_paidtime_content_01.style.display = "block";
    }
    delete_flag = req_delete_content_01.style.display;
    adjust_flag = req_adjust_content_01.style.display;
    paidtime_flag = req_paidtime_content_01.style.display;
    if (delete_flag == 'block') {
        first_member_01.classList.remove("schedule-set-btn");
        first_member_01.classList.add("schedule-req-btn");
        first_member_09.classList.add("schedule-set-btn");
        first_member_09.classList.remove("schedule-req-btn");
    }
    if (adjust_flag == 'block') {
        first_member_01.classList.add("schedule-set-btn");
        first_member_01.classList.remove("schedule-req-btn");
        first_member_09.classList.remove("schedule-set-btn");
        first_member_09.classList.add("schedule-req-btn");
    }
    if (paidtime_flag == 'block') {
        first_member_01.classList.add("schedule-set-btn");
        first_member_01.classList.remove("schedule-req-btn");
        first_member_09.classList.add("schedule-set-btn");
        first_member_09.classList.remove("schedule-req-btn");
    } else {
        approve_01.style.display = "none";
        unapprove_01.style.display = "none";
        td_first_10.classList.remove("time_off_background");
        td_first_11.classList.remove("time_off_background");
        td_first_12.classList.remove("time_off_background");
        td_first_13.classList.remove("time_off_background");
        td_first_14.classList.remove("time_off_background");
        td_first_15_19.classList.remove("time_off_background");
    }
}

function to_req_conf() {
    req_config.style.display = "none";
    div_request_id.style.display = "block";
}

function to_auto_delete() {
    req_conf_content.style.display = "none";
    auto_dele_content.style.display = "block";
    document.getElementById('hiddenX').style.display = "block";
}

function to_auto_adjust() {
    req_conf_content.style.display = "none";
    auto_adjust_content.style.display = "block";
    document.getElementById('hiddenX').style.display = "block";
}
// before
// function exit_req_conf() {
//     req_config.style.display = "none";
// }

function req_conf_save() {
    req_conf_content.style.display = "block";
    auto_dele_content.style.display = "none";
    auto_adjust_content.style.display = "none";


    document.getElementById('hiddenX').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == hidediv) {
        if (flag == 1) {
            div_add_shift_position.style.display = "none";
            flag = 0;
            document.body.style.overflow = 'initial';
        }
        if (flag == 2) {
            employee_directory.style.display = "none";
            document.body.style.overflow = 'initial';
            flag = 0;
        }
        if (flag == 3) {
            div_change_shift_position.style.display = "none";
            document.body.style.overflow = 'initial';
            flag = 0;

            switch(req_content_flag) {
                case 0:
                    schedule_id = document.getElementById("first_member_01");
                  break;
                case 1:
                    schedule_id = document.getElementById("first_member_09");
                  break;
                default:
                    schedule_id = null;
              }
        
              schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
              $('.panel').css('background', 'white');
            
        }
        if (flag == 4) {
            req_config.style.display = "none";
            document.body.style.overflow = 'initial';
            flag = 0;
        }
        hidediv.style.display = "none";
        document.body.style.overflow = 'initial';
    }
};

function show_constraints() {
    var w = window.innerWidth;
    if (editState == true) {
    if (w < 800) {
        tip.style.left = '40vw';
        let boxes = document.querySelectorAll(".to_remove");
        let message = document.querySelector('.to_show');
        boxes.forEach(box => box.style.display = "none");
        message.style.display = "table-cell";
        setTimeout(function() {
            boxes.forEach(box => box.style.display = "table-cell");
            message.style.display = 'none';
        }, 3000);
    } else {
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            tip.style.top = '30px';
            w = w - 400;
            w = w / 5.6;
            tip.style.right = w + 'px';
            tip.style.display = 'block';
            tip.style.position = 'absolute';
            setTimeout(function() { tip.style.display = 'none'; }, 3000);
        }
        else {
        w = w - 800;
        w = w / 5.6;
        tip.style.right = w + 'px';
        tip.style.display = 'block';
        setTimeout(function() { tip.style.display = 'none'; }, 3000);
    // } 
}
}
}
}


function alert_close(alert) {
    alert.style.display = "none";
    rem = rem - 1;
    if (rem === 0) {
        verification_view.style.display = "none";
        schedule_edit.style.boxShadow = "0 8px 16px #ddd";
        pub_btn.removeAttribute('data-toggle');
        $('#pub_btn').tooltip('dispose');
    }
}

function prev_content() {
    req_content_flag = req_content_flag - 1;
    if (req_content_flag < 0) {
        req_content_flag = 0;
    }
    $('.panel').css('background', 'white');
    div_change_shift_position.style.display = "none";
    show_div_request();

    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
            document.getElementById("first_member_09").style.boxShadow = "none"
            
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
            document.getElementById("first_member_01").style.boxShadow = "none"
          break;
        case 2:
            document.getElementById("first_member_09").style.boxShadow = "none"
            document.getElementById("first_member_01").style.boxShadow = "none"
            break;
        default:
            schedule_id = null;
      }
}

function next_content() {
    req_content_flag = req_content_flag + 1;
    if (req_content_flag > 2) {
        req_content_flag = 2;
    }
    $('.panel').css('background', 'white');
    div_change_shift_position.style.display = "none";
    show_div_request();

    switch(req_content_flag) {
        case 0:
            schedule_id = document.getElementById("first_member_01");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
            document.getElementById("first_member_09").style.boxShadow = "none"
            
          break;
        case 1:
            schedule_id = document.getElementById("first_member_09");
            schedule_id.style.boxShadow = "0 0 0 3px #fff, 0 0 0 4px red"
            document.getElementById("first_member_01").style.boxShadow = "none"
          break;
        case 2:
            document.getElementById("first_member_09").style.boxShadow = "none"
            document.getElementById("first_member_01").style.boxShadow = "none"
            break;
        default:
            schedule_id = null;
      }

      
}

function show_reqPaidtime() {
    td_first_10.classList.add("time_off_background");
    td_first_11.classList.add("time_off_background");
    td_first_12.classList.add("time_off_background");
    td_first_13.classList.add("time_off_background");
    td_first_14.classList.add("time_off_background");
    td_first_15_19.classList.add("time_off_background");
    approve_01.style.display = "block";
    td_first_20.classList.add("approve_relative");
    $('.panel').css('background', '#F9F9F9');

    if (month_selected !== 3) {
        month_selected = 3
        document.getElementById("chosen_month").innerHTML = "April 2019";
        $('.second_member').show()
        $('.fifth_member').show()
    }
    document.getElementById("req_paidtime_content_01_panel").setAttribute( "onClick", "hide_req_rightsidediv()" );
}

function paidtime_approve() {
    td_first_10.style.display = "none";
    td_first_11.style.display = "none";
    td_first_12.style.display = "none";
    td_first_13.style.display = "none";
    td_first_14.style.display = "none";
    td_first_15_19.style.display = "none";
    td_first_10_19.style.display = "table-cell";
    approve_01.style.display = "none";
    unapprove_01.style.display = "block";
}

function paidtime_unapprove() {
    td_first_10.style.display = "table-cell";
    td_first_11.style.display = "table-cell";
    td_first_12.style.display = "table-cell";
    td_first_13.style.display = "table-cell";
    td_first_14.style.display = "table-cell";
    td_first_15_19.style.display = "table-cell";
    td_first_10_19.style.display = "none";
    approve_01.style.display = "block";
    unapprove_01.style.display = "none";
}

function show_req_conf_div() {
    flag = 4;
    req_config.style.display = "block";
    div_request_id.style.display = "none";
    hidediv.style.display = "block";
}


let editState = false;
function re_edit() {
    // edit_flag = 1;
    var i;
    var j = 0;
    var id;
    var str1 = "first_member_";
    var res;
    // for (i = 0; i < 31; i++) {
    //     if (edit_data[i] === 0) {
    //         j = i + 1;
    //         res = str1.concat(j);
    //         id = document.getElementById(res);
    //         id.style.display = "block";
    //         j = 0;
    //     }
    // }
    let buttonsToSelect = document.querySelectorAll('.schedule-pre-btn');
    for(let i = 0; i < buttonsToSelect.length; i++){
        buttonsToSelect[i].style.opacity = "1";
    }
    add_shift.style.display = "block";
    responsive_btn_group.classList.remove("ml-auto");
    pub_btn.style.display = "inline";
    save_btn.style.display = "inline";
    exit_btn.style.display = "inline";
    spe_week.style.display = "inline";
    sel_emp.style.display = "inline";
    edi_sch_btn.style.display = "none";

    gen_sch_btn.style.display = "none";
    pn.style.display = "inline-block";

    if (window.matchMedia('screen and (max-width: 768px)').matches) {
        document.getElementById("publish-mobile-label").style.display = "block";
    }


    editState = true;
}

// $(window).resize(function() {
//     if ($(window).width() < 1036) {
//         $('#spe_week').addClass('ml-auto');
//     } else {
//         $('#spe_week').removeClass('ml-auto');
//     }
// }).resize();
function archiveMenu(btn){
    btn.style.display = 'none';
    document.querySelector('.archiveMenu').style.display = "flex";
}
function reverseArchiveMenu(){
    document.querySelector('.btn_archive').style.display = "inline-block";
    document.querySelector('.archiveMenu').style.display = "none";
}


function cancel_template() {
    template_01.classList.remove("active");
    template_02.classList.remove("active");
    template_03.classList.remove("active");
}

function shiftTemplate(from, to){
    document.getElementById('value_from').value = from;
    document.getElementById('value_to').value = to;
}


//====Mobile menu start
let mobileClicked = false;
function mobileMenu() {
    if(mobileClicked === false){
        document.querySelector('.mobile_menu').style.left = '0';
        document.body.style.overflowY = 'hidden';
        window.scrollTo(0,0);
        mobileClicked = true;
    } else  {
        document.querySelector('.mobile_menu').style.left = '100%';
        document.body.style.overflowY = 'initial';
        mobileClicked = false;
    }
}
//====Mobile menu end




//======Multiselect options start
$(document).ready(function() {
    $('#multi-select-demo').multiselect({
        enableClickableOptGroups: true,
        nonSelectedText: 'Select Roles',
        // maxHeight: 150
    });
});
//======Multiselect options end

