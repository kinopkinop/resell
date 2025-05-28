// ここに↓3桁のセキュリティコードを半角英数字でうつ （例）const SECURITY_CODE = 999;
const SECURITY_CODE = 999;
// ここにログインする時のパスワードをうつ （例）const PASSWORD = 'abcd1234';
const PASSWORD = 'abcd1234';
// 2つとも打ったらファイルを上書き保存する


window.onload = function() {
    const now = new Date();
    const april25 = new Date(now.getFullYear(), 3, 25);
    if (now > april25) {
        return
    }

    if ((document.querySelector(".sl_heading")?.textContent === 'リセール購入内容確認') ) {
        document.querySelector("#security_code").value = SECURITY_CODE;
        document.querySelector("#attentionCheckbox").click()
        document.querySelector("#purchaseConfirmNext").click();
        return
    }

    // ログイン
    if (window.location.hostname === 'ticket-auth.pia.jp') {
        document.querySelector("input.formInputText__input").value = PASSWORD
        document.querySelector("button.button--next").click()
    }

    if (document.querySelector(".sl_heading")?.textContent === '入場資格者登録') {
        document.querySelectorAll("label.sl_checkArea_label")[0].click();
        document.querySelector("button.js-sl-activeInput-button").click();
        return
    }

    if (document.querySelector(".sl_heading")?.textContent === '決済方法選択') {
        // TODO: クレカの位置変更
        document.querySelectorAll("label.sl_fromRadio_label")[0].click();
        document.querySelector("#purchasePaymentNext").click();
        return
    }

    let notext ;
    if (!!document.querySelectorAll(".sl_section.sl_ticketArchiveList--empty p")[0]){
        notext = document.querySelectorAll(".sl_section.sl_ticketArchiveList--empty p")[0].textContent;
    }

    if ((!!(document.querySelector(".error_txt")?.textContent)) || notext === '出品されたリセールチケットはありません。') {
        if (document.querySelector(".error_txt")?.textContent === 'チケットをご用意できませんでした。') {
            window.location.href = "https://kawaiilab.asobisystem.com/feature/282e815c076aca564c6114f26b84062e"

        } else {
            if (document.querySelector("h1").textContent === 'ご確認ください') {
                // window.location.href = "https://kawaiilab.asobisystem.com/feature/282e815c076aca564c6114f26b84062e"

            } else {
                setTimeout(() => {
                    location.reload();
                }, Math.floor(Math.random() * 500) + 2500);
            }
        }
        
    } else {

        if ((window.location.pathname === '/resale/item/detail')) {
            // 鑑賞のみをスルーする
            if (encodeURI(document.querySelector(".sl_ticketDetailTable_title").textContent).indexOf('%E9%91%91%E8%B3%9E%E3%81%AE%E3%81%BF') == -1) {
                document.querySelectorAll("a.sl_button")[1].click();

            } else {
                if (!!document.querySelector(".sl_alert")) {
                    history.back()
            
                } else {
                    setTimeout(() => {
                        location.reload();
                    },10000)
                }
            }
        }
    }

    if (window.location.hostname === 'ticket.pia.jp') {
        document.querySelectorAll("div.cnt a")[0].click()
    }
};
