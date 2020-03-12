(function() {
  var i; /*index*/
  
  /*Ϊÿ��li������Ϲرհ�ť*/
  function closeBtn() {
    var myNodelist = document.getElementsByTagName("li");
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7"); /*unicode����*/
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  }

  /*����رհ�ť�����ص�ǰli*/
  function closeElement() {
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement; /*�رհ�ť�ĸ�Ԫ�� - li*/
        div.style.display = "none";
      }
    }
  }

  /*���li��ʱ�򣬼���.checked���ٵ����ȡ��*/
  function ifChecked() {
    var list = document.querySelector('ul');
    list.onclick = function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }
  }

  /*������ʱ������һ���µ�ul*/
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("��������һ����������");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = ""; /*�������*/
  }
   
  /*��ʼ��list*/
  function initList() {   
    closeBtn();
    closeElement();
    ifChecked();
  }
  
  /*��ʼ��*/
  function init() {
    var addButton = document.getElementById("addButton"); 
    initList();

    /*��Ӱ�ť���ʱִ��*/
    addButton.onclick = function() {
      newElement();
      initList();
    }

    /*���س�ʱ��ִ��*/
    document.onkeydown = function(event) {
      if(event.keyCode == 13) {
        newElement();
        initList();
      }
    }
  }

  init();

})();