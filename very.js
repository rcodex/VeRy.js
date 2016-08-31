/*** VeRy.Js BY RAHUL NEGI***
Product : VeRy.js
Dev: Rahul Negi
Version: 0.1.0
Dev Url: http://rcodex.com/rahul-negi/
Follow @ https://fb.com/Mr.Rahul.Negi
Licence: GNU GPL V3 */
! function() {
    function e(e) {
        this.s = e, "object" == typeof e ? e : this.s = document.querySelector(e), "object" == typeof e ? e : this.sAll = document.querySelectorAll(e)
    }
    var t = function(t) {
        return new e(t)
    };
    t.fn = e.prototype = {
        hide: function() {
            return elem = this.s, this.s.style.display = "none", this
        },
        show: function() {
            return elem = this.s, this.s.style.display = "block", this
        },
        ajaxCall: function(e, t, s, n, i) {
            elem = this.s;
            var r = function() {
                    switch (o.readyState) {
                        case 0:
                        case 1:
                            i(o, o.responseText);
                        case 2:
                        case 3:
                            break;
                        case 4:
                            i(o, o.responseText);
                            break;
                        default:
                            alert("error")
                    }
                },
                o = new XMLHttpRequest;
            return o.onreadystatechange = r, "POST" == e ? (o.open(e, t, n), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")) : o.open(e, t + "?" + s, n), o.send(s), this
        },
        ajaxStart: function(e) {
            return this.s.readyState < 4 ? (e(), this) : !1
        },
        ajaxStop: function(e) {
            return 4 != this.s.readyState && 200 != this.s.status ? !1 : (e(), this)
        },
        each: function(e) {
            elem = this.s;
            var t;
            return [].slice.call(this.sAll).forEach(function(s, n) {
                t = e(s)
            }), t
        },
        append: function(e, t, s, n) {
            return elem = this.s, n = "undefined" != typeof n ? n : this.s, t = "undefined" != typeof t ? t : "span", s = "undefined" != typeof s ? s : "", null == n && console.log("No Label Found For A Form Input"), outer = document.createElement(t), outer.id = s, outer.innerHTML = e, n.appendChild(outer), this
        },
        event: function(e, t) {
            var s = this.s;
            return s.addEventListener ? s.addEventListener(e, t, !1) : s.attachEvent && s.attachEvent("on" + e, t), this
        },
        parent: function() {
            return elem = this.s, this.s.parentNode
        },
        child: function() {
            return elem = this.s, elem.childNodes[0]
        },
        attr: function(e, t) {
            return elem = this.s, "undefined" == t || null == t || "" == t ? this.s.getAttribute(e) : (this.s.setAttribute(e, t), this)
        },
        css: function(e) {
            return elem = this.s, this.s.style.cssText = e, this
        },
        remove: function() {
            elem = this.s, this.s ? this.s.parentNode.removeChild(this.s) : console.log("cannot perform remove action for this element, already performed")
        },
        delay: function(e, t) {
            return elem = this.s, setTimeout(e, t), this
        },
        removeAttr: function(e) {
            return elem = this.s, this.s.removeAttribute(e), this
        },
        addClass: function(e) {
            return elem = this.s, this.s.classList.contains(e) ? !1 : (null == this.s.classList || "" == this.s.classList ? this.s.className += e : this.s.className += " " + e, this)
        },
        hasClass: function(e) {
            return elem = this.s, new RegExp(" " + e + " ").test(" " + this.s.className + " ")
        },
        removeClass: function(e) {
            return elem = this.s, elem.className = elem.className.replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""), this
        },
        toggleClass: function(e) {
            return elem = this.s, this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this
        },
        closestClass: function(e, s) {
            for (var n = this.s; n.className != e;)
                if (n = t(n).parent(), !n) return null;
            return n
        },
        html: function(e) {
            return elem = this.s, e ? (this.s.innerHTML = e, this) : this.s.innerHTML
        },
        text: function(e) {
            if (elem = this.s, e) this.s.innerText = e;
            else var t = this.s.innerText;
            return "undefined" != typeof t ? t : this.s.textContent, t
        },
        animate: function(e, t, s, n, i) {
            if (elem = this.s, elem) {
                var r = (new Date).getTime(),
                    o = setInterval(function() {
                        var a = Math.min(1, ((new Date).getTime() - r) / i);
                        elem.style[e] = s + a * (n - s) + t, 1 == a && clearInterval(o)
                    }, 25);
                return elem.style[e] = s + t, this
            }
        },
        serializeData: function() {
            var e = this.s;
            e = "undefined" != typeof this.s ? e : this;
            var t, s = [];
            if ("object" == typeof e && ("FORM" == e.nodeName || "form" == e.nodeName)) {
                var n = e.elements.length;
                for (i = 0; i < n; i++)
                    if (t = e.elements[i], t.name && !t.disabled && "file" != t.type && "reset" != t.type && "submit" != t.type && "button" != t.type)
                        if ("select-multiple" == t.type)
                            for (j = e.elements[i].options.length - 1; j >= 0; j--) t.options[j].selected && (s[s.length] = encodeURIComponent(t.name) + "=" + encodeURIComponent(t.options[j].value));
                        else("checkbox" != t.type && "radio" != t.type || t.checked) && (s[s.length] = encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }
            return s.join("&").replace(/%20/g, "+")
        }
    }, window.v || (window.v = t)
}();
