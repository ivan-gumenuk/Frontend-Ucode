let li = document.getElementsByTagName(`li`);
let datasetElements;

for (let i = 0; i < li.length; i++) {
  if (!(li[i].className) || (li[i].className !== `good` &&
    li[i].className !== `evil`)) {
    li[i].className = `unknown`;
  }

  if (!(li[i].dataset.element)) {
    li[i].dataset.element = `none`;
  }

  datasetElements = li[i].dataset.element.split(' ');
  if (datasetElements.length) {
    li[i].append(document.createElement(`br`));
    for (let j = 0; j < datasetElements.length; j++) {
      let circle = document.createElement(`div`);

      circle.className = `elem ${datasetElements[j]}`;
      if (datasetElements[j] === `none`) {
        let line = document.createElement(`div`);

        line.className = `line`;
        circle.append(line);
      }
      li[i].append(circle);
    }
  }
}