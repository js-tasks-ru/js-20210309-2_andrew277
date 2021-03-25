export default class ColumnChart {
  constructor({
    data = [],
    label = '',
    link = '',
    value = 0
  } = {}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;
    this.chartHeight = 50;
    this.render();
  }

  render() {
    const element = document.createElement('div'); // (*)

    element.innerHTML = `
      <div class="column-chart ${this.data.length || 'column-chart_loading'}"
           style="--chart-height: ${this.chartHeight}"
      >
        <div class="column-chart__title">
          Total ${this.label}
          <a href="${this.link}" class="column-chart__link">View all</a>
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">${this.value}</div>
          <div data-element="body" class="column-chart__chart">
            ${this.getColumnCharts(this.data)}
          </div>
        </div>
      </div>
    `;

    // NOTE: в этой строке мы избавляемся от обертки-пустышки в виде `div`
    // который мы создали на строке (*)
    this.element = element.firstElementChild;
  }

  getColumnCharts(data) {
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;

    return data.map(item => {
      let percent = (item / maxValue * 100).toFixed(0) + '%';
      let value = String(Math.floor(item * scale));

      return `<div style="--value: ${value}" data-tooltip="${percent}"></div>`;
    }).join('');
  }

  update(data) {
    return this.getColumnCharts(data);
  }

  remove() {
    this.element.remove();
  }

  chartHeight;

  destroy() {
    this.remove();
    // NOTE: удаляем обработчики событий, если они есть
  }
}
