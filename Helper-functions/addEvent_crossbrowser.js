/* 
Кроссброузерный объект для добавление и удаления обработчиков события
Cross-browser object for add or remove events handler 
*/
var EventUtil = {
	// Добавить обработчик события / Add event handler
	addHandler: function(element, type, handler){
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			/* 
			В IE все события имеют префикс 'on', поэтому необходимо его добавить в событие
			For IE all events have prefix 'on' in events, so need to add this prefix in events
			*/
			element.attachEvent('on' + type, handler); 
		} else {
			element['on' + type] = handler;
		}
	},
	// Удалить обработчик события / Delete event handler
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	// Остановить событие / Stop event
	stopPropagation: function (e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	},
	// Проверка на наличие event / Check for the presence of events
	getEvent: function(e) {
		return e ? e : window.e;
	},
	// Получение target.event / Get target.event
	getTarget: function(e) {
		return e.target || e.srcElement;
	},
	// Cброс дефолтного поведения элементов / Reset the default behaviour of the elements
	preventDefault: function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	},
};