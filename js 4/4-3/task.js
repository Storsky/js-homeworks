const tabNav = document.querySelector('.tab__navigation');
const tabs = tabNav.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

function activateTab(tabIndex) {
  tabs.forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.add('tab_active');
    } else {
      tab.classList.remove('tab_active');
    }
  });

  tabContents.forEach((content, index) => {
    if (index === tabIndex) {
      content.classList.add('tab__content_active');
    } else {
      content.classList.remove('tab__content_active');
    }
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    activateTab(index);
  });
});
