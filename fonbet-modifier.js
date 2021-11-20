
function setPageStyles() {
	// ставим элементу большую высоту
	var element = document.getElementsByClassName('page__container')[0]
	element.style.height = '50000px'

	// переопределяем поведение скроллов на странице
	document.body.style.cssText = "visible !important";
}

// функция ищет элементы по тегу и префиксу класса
function findElementsByTagAndClassPrefix(tagName, className){
	let elems = document.querySelectorAll(tagName + "[class^='" + className + "'], " + tagName + "[class*=' " + className + "]");

	return elems
}

// функция получает полное имя класса из префикса для элементов
function getFullClassNameForElements(elems, classNamePrefix){
	let classes = Array.from(elems).map(e => Array.from(e.classList)).reduce((arr, res) => {
	  res = res.concat(arr);
	  return res;
	}, []).filter(cls => cls.startsWith(classNamePrefix))
	
	return classes
}

// удаление элементов по имени класса
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// удаляем левую панель
function removeLeftPanel(){
	let elems = findElementsByTagAndClassPrefix('aside', 'sport-filter-layout__filter')
	let className = getFullClassNameForElements(elems, 'sport-filter-layout__filter')[0]
	removeElementsByClass(className)
}

// удаляем правую панель
function removeRightPanel(){
	let elems = findElementsByTagAndClassPrefix('div', 'coupon-layout__coupons')
	let className = getFullClassNameForElements(elems, 'coupon-layout__coupons')[0]
	removeElementsByClass(className)
}

// удаляем чат, который справа снизу
function removeChat(){
	let elems = findElementsByTagAndClassPrefix('div', 'live-tex-chat-button')
	let className = getFullClassNameForElements(elems, 'live-tex-chat-button')[0]
	removeElementsByClass(className)
}

// вызов всего
setPageStyles()
removeLeftPanel()
removeRightPanel()
removeChat()