class App {
  constructor() {
    this.dataUrl = './data/data.json';
    this.appContainer = document.getElementById('app');
    this.mainTemplate = Templates['main'];
  }

  init() {
    this.registerHandlebarsHelpers();
    this.loadData();
  }

  registerHandlebarsHelpers() {
    Handlebars.registerHelper('includes', (value, search) => {
      if (!value) return false;
      return value.indexOf(search) !== -1;
    });

    Handlebars.registerHelper('eq', (a, b) => a === b);
  }

  async loadData() {
    try {
      const response = await fetch(this.dataUrl);
      const data = await response.json();
      this.render(data);
    } catch (error) {
      console.error('Error loading data.json:', error);
    }
  }

  render(data) {
    if (!this.mainTemplate || !this.appContainer) return;

    const html = this.mainTemplate(data);
    this.appContainer.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
