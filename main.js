var options = {
  series: [{
      name: 'BTC',
      data: [31, 40, 28, 51, 42, 109, 100, 12, 78, 90, 100, 125, 120]
  }, {
      name: 'ETH',
      data: [11, 32, 45, 32, 34, 52, 41, 67, 90, 86, 45, 123, 70]
  }],
  chart: {
      height: 600,
      type: 'area'
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      curve: 'smooth'
  },
  xaxis: {
      type: 'month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  },
  tooltip: {
      x: {
          format: 'MM'
      },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');
const themeBtn = document.querySelector('.theme-btn');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icons = themeBtn.querySelectorAll('.material-icons');
    icons.forEach(icon => icon.classList.toggle('active'));
});