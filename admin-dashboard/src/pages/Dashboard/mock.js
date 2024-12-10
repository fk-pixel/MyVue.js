import config from '@/config';

export default {
  bigStat: [
    {
      product: 'Light Blue',
      total: '4,232',
      color: 'primary',
      registrations: {
        value: 830,
        profit: true,
      },
      bounce: {
        value: 4.5,
        profit: false,
      },
    },
    {
      product: 'Sing App',
      total: '754',
      color: 'danger',
      registrations: {
        value: 30,
        profit: true,
      },
      bounce: {
        value: 2.5,
        profit: true,
      },
    },
    {
      product: 'RNS',
      total: '1,025',
      color: 'info',
      registrations: {
        value: 230,
        profit: true,
      },
      bounce: {
        value: 21.5,
        profit: false,
      },
    },
  ],
  trend: {
    gradient: [config.light.success]
  },
  table_10: [
    {
      ProduktID: "3312457E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"45" ,
      Gesamt: "1120"
    },
    {
      ProduktID: "1245127E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"67" ,
      Gesamt: "23120"
    },
    {
      ProduktID: "12123457E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"83" ,
      Gesamt: "780"
    },
    {
      ProduktID: "1234547E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"49" ,
      Gesamt: "907"
    },
    {
      ProduktID: "512457E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"238" ,
      Gesamt: "120"
    },
    {
      ProduktID: "1245^2347E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"86" ,
      Gesamt: "180"
    },
    {
      ProduktID: "12567457E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"115" ,
      Gesamt: "7900"
    },
    {
      ProduktID: "10947E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"33" ,
      Gesamt: "450"
    },
    {
      ProduktID: "12z597E",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"75" ,
      Gesamt: "230"
    },
    {
      ProduktID: "190phE",
      Produkt: "Wassermeloe Holz Tisch" ,
      ImageUrl2:[] ,
      Stück:"91" ,
      Gesamt: "693"
    },
  ],
  table: [
    {
      id: 0,
      name: 'Mark Otto',
      email: 'ottoto@wxample.com',
      product: 'ON the Road',
      price: '$25 224.2',
      date: '11 May 2017',
      city: 'Otsego',
      status: 'Sent',
    },
    {
      id: 1,
      name: 'Jacob Thornton',
      email: 'thornton@wxample.com',
      product: 'HP Core i7',
      price: '$1 254.2',
      date: '4 Jun 2017',
      city: 'Fivepointville',
      status: 'Sent',
    },
    {
      id: 2,
      name: 'Larry the Bird',
      email: 'bird@wxample.com',
      product: 'Air Pro',
      price: '$1 570.0',
      date: '27 Aug 2017',
      city: 'Leadville North',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Joseph May',
      email: 'josephmay@wxample.com',
      product: 'Version Control',
      price: '$5 224.5',
      date: '19 Feb 2018',
      city: 'Seaforth',
      status: 'Declined',
    },
    {
      id: 4,
      name: 'Peter Horadnia',
      email: 'horadnia@wxample.com',
      product: 'Let\'s Dance',
      price: '$43 594.7',
      date: '1 Mar 2018',
      city: 'Hanoverton',
      status: 'Sent',
    },
  ],
  menu: [
    'Edit',
    'Copy',
    'Delete',
    'Print'
  ],
  lastReports: [
    {title: 'Print PDF', icon: 'mdi-printer'},
    {title: 'Download', icon: 'mdi-download'},
    {title: 'Sand by mail', icon: 'mdi-email'},
    {title: 'Share', icon: 'mdi-share-variant'}
  ],
  select: ['Letzte Woche', 'Letzten Monat', 'Letztes Jahr'],
  mockApexPie: {
    options: {
      dataLabels: {
        enabled: true
      },
      colors: [config.light.success, config.light.secondary, config.light.warning, config.light.primary, config.light.info, config.light.pastelred ],
      labels: ["Möbel", "Teller & Schalen", "Dekoration", "Teekannen", "Beleuchtung", "Truhen & Kisten"],
      legend: { position: 'bottom' }
    },
    series: [12, 34, 22, 34, 67, 93],
  },
  //"Server Overview", "Anzahl der Produkte" ye dönüstürüldü

  //ebay-stok
  apexArea1: {
    options: {
      chart: {
        id: 'apexAreaFirst',
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.warning],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [150, 156, 143, 133, 152, 175, 195]
      }
    ],
  },
  //amazon-stok
  apexArea2: {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.success],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [0, 0,0, 0, 0, 0, 0]
      }
    ],
  },
  //inhaber-stok
  apexArea3: {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
      },
      colors: [config.light.secondary],
      fill: {
        type: 'solid',
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
    },
    series: [
      {
        data: [0, 0,0, 0, 0, 0, 0]
      }
    ],
  },
  // Umsätze Grafik Daten
  mainApexArea: {
    options: {
      chart: {
        width: '100%',
        toolbar: {
          show: true
        },
      },
      dataLabels: {
        enabled: true
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      markers: {
        size: [5, 0, 0]
      },
      stroke: {
        width: [3, 3, 0],
        curve: ['smooth', 'smooth', "smooth"]
      },
      fill: {
        type: 'linear',
      },
      legend: {
        show: false

      },
      colors: [config.light.warning, config.light.success, config.light.primary],
      yaxis: {
        axisBorder: {
          show: true,
          color: '#B9B9B980'
        },
        labels: {
          style: {
            colors: ['#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
            fontSize: '12px',
          },
        },
        tickAmount: 5
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '12px',
            colors: ['#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
          }
        },
        tickAmount: 10,
        categories:[],
      }
    },
     //Letzte Woche - dh letzte 7 täglich Daten
    series: [
      {
        name: 'Ebay',
        type: 'line',
        data: [] //UmsatzLetztewoche
      },
    ],
    //Letzten Monat - dh letzte 30 täglich Daten
    series2: [
      {
        name: 'Ebay',
        type: 'line',
        data: [] //UmsatzLetztenmonat
      },
    ],
    //Letztes Jahr - dh letzte 365 täglich Daten
    series3: [
      {
        name: 'Ebay',
        type: 'line',
        data: [] //UmsatzLetztesjahr
      },
    ],

  },
  //Verkäufe nach Kategorie Daten
  apexPie: {
    options: {
      dataLabels: {
        enabled: true
      },
      colors: [config.light.bluedarken, config.light.secondary, config.light.amber, config.light.deeporange, config.light.greendarken, config.light.pastelred ],
      labels: [],
      legend: { position: 'bottom' },
      series: [],
    },
  },
  // Umsätze Grafik
  MockMainApexArea: {
    options: {
      chart: {
        width: '100%',
        toolbar: {
          show: true
        },
      },
      dataLabels: {
        enabled: true
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      markers: {
        size: [3, 3, 0]
      },
      stroke: {
        width: [3, 3, 0],
        curve: ['straight', 'straight', "smooth"]
      },
      fill: {
        type: 'linear',
      },
      legend: {
        show: true

      },
      colors: [config.light.warning, config.light.success, config.light.pastelred],
      yaxis: {
        axisBorder: {
          show: true,
          color: '#B9B9B980'
        },
        labels: {
          style: {
            colors: ['#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
            fontSize: '12px',
          },
        },
        tickAmount: 5
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '12px',
            colors: ['#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980', '#B9B9B980','#B9B9B980','#B9B9B980'],
          }
        },
        tickAmount: 10,
      }
    },
    //Letzte Woche - dh letzte 7 täglich Daten
    series: [
      {
        name: 'Ebay',
        type: 'line',
        data: [1200, 2340, 2390, 4155, 8005, 6090, 5100]
      },
      /* {
        name: 'Amazon',
        type: 'line',
        data: [3100, 4000, 1800, 7100, 11100, 3200, 4500]
      },
      {
        name: 'Inhaber',
        type: 'area',
        data: [2100, 4200, 6090, 5100, 2000, 1800, 4100]
      } */
    ],
    //Letzten Monat - dh letzte 30 täglich Daten
    series2: [
      {
        name: 'Ebay',
        type: 'line',
        data: [2100, 2000, 1800, 4100, 1200, 3600, 6100, 2100, 2000, 1800, 4100, 1200, 3600, 6100,2100, 2000, 1800, 4100, 1200, 3600, 6100, 2100, 2000, 1800, 4100, 1200, 3600, 6100,2100, 2000]
      },
      /* {
        name: 'Amazon',
        type: 'line',
        data: [12100, 2000, 21800, 4100, 1200, 31600, 6100, 2100, 22000, 1800, 4100, 12002, 3600, 6100,2100, 20100, 1800, 4100, 11200, 3600, 61010, 2100, 20010, 1800, 4100, 11200, 3600, 16100]
      },
      {
        name: 'Inhaber',
        type: 'area',
        data: [21020, 2000, 1800, 4100, 1200, 36020, 6100, 2100, 20100, 1800, 4100, 12200, 3600, 6100,21100, 2000, 1800, 41200, 1200, 3600, 61010, 2100, 2000, 1800, 4100, 1200, 13600,6100,2100]
      } */
    ],
    //Letztes Jahr - dh letzte 365 täglich Daten
    series3: [
      {
        name: 'Ebay',
        type: 'line',
        data: [1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325
        ]
      },
      /* {
        name: 'Amazon',
        type: 'line',
        data: [1200,1400,2350,1224,40325,6789,4569,9012,1267,8976,1200,1400,12350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,12124,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,91012,1267,8976,1200,1400,2350,1224,4325,6789,4569,39012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,18976,1200,14200,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,4325,6789,41569,9012,1267,8976,13200,1400,2350,1224,4325,6789,4569,9012,1267,8976,11200,1400,2350,12224,4325,6789,4569,9012,1267,8976,11200,1400,2350,1224,4325,26789,4569,9012,21267,8976,1200,1400,2350,12224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,12400,2350,1224,4325,6789,4569,90122,1267,8976,1200,1400,23520,1224,4325,6789,45639,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325
        ]
      },
      {
        name: 'Inhaber',
        type: 'area',
        data: [10200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,10267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,10400,2350,1224,4325,6789,4569,9012,1267,80976,1200,14000,2350,1224,40325,6789,4569,9012,1267,89076,1200,1400,2350,1224,4325,67089,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,45069,9012,1267,89760,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          1200,1400,2350,1224,43250,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,10200,14000,2350,1224,43025,6789,4569,9012,1267,8976,1200,1400,2350,12024,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,
          12000,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,12000,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325,6789,4569,90012,1267,80976,1200,1400,2350,1224,4325,6789,4569,9012,1267,8976,1200,1400,2350,1224,4325
        ]
      } */
    ],
  },
  //Meine Bestellung Grafik
  apexBar1: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.primary],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [10, 63, 14, 39, 70, 15, 80]
    }],
  },
  apexBar2: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.warning],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0
        },
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [30, 23, 54, 69, 40, 25, 60]
    }],
  },
  apexBar3: {
    options: {
      chart: {
        id: 'chartFirst',
        toolbar: {
          show: false
        },
      },
      fill: {
        colors: [config.light.primary],
        opacity: 1
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0
        },
        xaxis: {
          lines: {
            show: false,
          }
        },
        yaxis: {
          lines: {
            show: false,
          },
        }
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    },
    series: [{
      data: [60, 43, 24, 19, 30, 45, 60]
    }],
  },

  methods: {

  }
};
