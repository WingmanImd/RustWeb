var i18n={languages:{en:"English"},language:"en",translations:{},translate:function(b,a){i18n.translations.hasOwnProperty(b)&&(b=i18n.translations[b]);a&&$.each(a,function(a,d){b=b.replace("{"+a+"}",d)});return b},load:function(b,a){$.getJSON("/i18n/"+b+".json",function(c){i18n.lang=b;i18n.translations=c.translations||{};$(".i18n").each(function(b,a){a=$(a);a.html(_($(a).html()));var c=a.prop("placeholder");""!=c&&a.prop("placeholder",_(c))});a&&a(null)}).fail(function(b,d){a&&a(d)})}},_=i18n.translate;
