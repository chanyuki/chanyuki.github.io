//script_fade.js
;(function(d,$){

  // 変数のデフォルト値
  var jQdmtab_defaults = {
    tabContentsContainer: '.tabContentsContainer',
    tabEventAction: 'click',
   current: 0,
    currentSelector: 'current',
  };

  $.fn.jQdmtab = function(options){

    // 変数を設定
    var defaults = jQdmtab_defaults;
    var setting = $.extend( defaults, options);

    var _$obj = $(this.get(0)),
    _s = $.data( $(this), setting ),
    _p = {
      tabs: _$obj.find('li'),
      tabCn: _$obj.find(_s.tabContentsContainer),
      tabCnHeight: function(){
        var _$cns = _p.tabCn.children(),
        _len = _$cns.length,
        _hi = 0;
        while(_len > 0){
          _hi = Math.max( _hi, _$cns.eq(--_len).height());
        }
        return _hi + 40;
      },
      current: _s.current,
      isAnimate: false
    };

		// ページ表示時に最初に設定したタブを開く
    tabChangeCurrent(_p.current);
    _p.tabCn.children().not(':eq('+ _p.current +')').css({
      display: 'none',
      opacity: 0
    });
    _p.tabCn.css({
      position: 'relative',
      overflow: 'hidden',
      background: '#f0f0f0',
      height: _p.tabCnHeight()
    });

    // タブにクリックイベントを追加
    _p.tabs.on( _s.tabEventAction, function(e){
      if(typeof e.preventDefault() === 'function') {
        e.preventDefaut();
      }

      var _$t = $(this),
      _index = _$t.index();
      _current = _p.current;

      if(_index != _current && !_p.isAnimate) {
        hideTabContent(_current);
        _p.current = _index;
        showTabContent(_index);
      }
    });

    // タブコンテンツの非表示処理
    function hideTabContent(_current){

      var _$target = _p.tabCn.children().eq(_current);
      _p.isAnimate = true;
      tabChangeCurrent(_current);
      _$target.css({
        position: 'ablsolute'
      }).animate({
        opacity: 0
      }, {
        duration: 500,
        complete: function(){
          hideComplete(_$target);
        }
      });

      function hideComplete(_$target){
        _p.isAnimate = false;
        _$target.css({
              left: 0,
              opacity: 0,
              display: 'none',
              position: 'relative'
            });
      }
    }

    // タブコンテンツの表示処理
    function showTabContent(_t){

      var _$target = _p.tabCn.children().eq(_t);
      _p.isAnimate = true;
      tabChangeCurrent(_t);

      _$target.css({
        display: 'block'
      }).animate({
        opacity: 1
      }, {
        duration: 500,
        complete: function(){
          showComplete(_$target);
        }
      });

      function showComplete(_$target){

        _p.isAnimate = false;
        _$target.css({
          display: 'block',
          position: 'relative',
          opacity: 1
        });

      }
    }

    // クリックされたタブをカレント（現在）のタブに変更する
    function tabChangeCurrent(_t){
      _p.tabs.eq(_t).toggleClass(_s.currentSelector);
    }

  }

  // オリジナルプラグインの有効化
  // クリック、フェードタイプ
  $('#tabContainer2').jQdmtab();


}(document, jQuery));
