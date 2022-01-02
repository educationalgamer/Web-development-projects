const items = document.querySelectorAll('.details'),
controls = document.querySelectorAll('.slides span'),
headerItems = document.querySelectorAll('.imgBox img'),
nextBtn = document.querySelector('button');
let current = 0;
  nextBtn.addEventListener('click', showNext);
  controls.forEach((control) => {
      control.addEventListener('click', activateClass)
  });
  function showNext(){
    reset();
    if (current === items.length - 1) current = -1;
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    headerItems[current].classList.add('active');
  }
  function activateClass() {
      reset();
      this.classList.add("active");
      const dataIndex = Number(this.dataset.index);
      items.forEach((item2,index) =>{
          if (index === dataIndex) {
              item2.classList.add('active');
          }
      });
      headerItems.forEach((item,index) =>{
          if (index === dataIndex) {
              item.classList.add('active');
          }
      });
  }
  function reset(){
      items.forEach(item => item.classList.remove('active'));
      controls.forEach(control => control.classList.remove('active'));
      headerItems.forEach(headerItem => headerItem.classList.remove('active'));
  }