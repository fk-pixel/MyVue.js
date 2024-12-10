const alasql = require('alasql');

export default {
    produkteTable: {
        selected: [],
        search: '',
        headers: [
            {
                text: 'ID',
                align: 'start',
                sortable: true,
                value: 'id',
            },
            { text: 'SKU', value: 'sku' },
            { text: 'Kategorie', value: 'kategorie' },
            { text: 'Produkt', value: 'produkt' },
            { text: 'Menge', value: 'menge' },
            { text: 'Geschäft', value: 'geschäft' },
        ],
        produkte: [
            {
                id:1,
                sku:'18770-017',
                kategorie: 'Möbel',
                produkt: 'Tisch',
                menge: 3,
                geschäft: 'Ebay',
                select: false
            },
            {
                id:2,
                sku:'16529-353',
                kategorie: 'Garten',
                produkt: 'Gartenzwerg',
                menge: 84,
                geschäft: 'Amazon',
                select: false
            },

        ],
    },
    created () {
        this.getItems();
    },
    computed: {
        urlArtikel() {
            return `https://${this.$store.state.token.apiUrl}/api/Artikels?access_token=${this.$store.state.token.client.id}`
        },
        urlContainer() {
            return `https://${this.store.state.token.apiUrl}/api/Containers`
        },
        rows() {
            return this.filteredItems.length
        },
        filteredItems() {
            return this.keyword
            ? this.items.filter(
                item => item.Name?.toLowerCase().includes(this.keyword.toLowerCase()) ||
                item.name?.toLowerCase().includes(this.keyword.toLowerCase()) ||
                item.BestanEinheit?.toLowerCase().includes(this.keyword.toLowerCase()) ||
                item.sku?.toLowerCase().includes(this.keyword.toLowerCase())
            )
            : this.items
        },
        ciftListe() {
            let liste = alasql("select herstellersku sku, count(*) adet from ? group by herstellersku having count(*)>1", [this.items])
            return liste;
        },
        cift() {
            return this.ciftListe.length
        },
        ciftListe2() {
            let liste = alasql("select sku, count(*) adet from ? group by sku having count(*)>1", [this.items])
            return liste;
        },
        cift2() {
            return this.ciftListe2.length
        }
        },
        methods: {
            rowClass(item, type) {
                if (!item || type !== 'row') return
                if (item.Stok == undefined || item.Stok === 0) return 'table-danger'
                // else console.log(item.Stok);
              },
            getItems() {
              this.isBusy = true;
              this.axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
              this.axios
              .get(this.urlArtikel, {
                params: {
                  filter: {
                    "fields": ["id","sku","name", "herstellersku", "menge"],
                    "include": "ExProducts"
                    }
                  }
                })
              .then(async (res) => {
                this.isBusy = false;
                this.items = res.data.map(d => {
                  if(d.ExProducts && d.ExProducts.length>0)
                    return  {...d.ExProducts[0], ...d}
                  else {
                    this.axios
                    .get(`${this.urlContainer}/${d.id}/files?${this.$store.state.token.client.id}`)
                    .then((res) => {
                      let imageUrl = res.data.length>0?`${this.urlContainer}/${d.id}/download/${res.data[0].name}?${this.$store.state.token.client.id}`:'';
                      let model = {...d, "herstellersku": d.herstellersku, "ImageUrl": imageUrl, name: `${d.name} (id: ${d.id})`};
                      this.items = this.items.map(obj => (model.id === obj.id)?model:obj);
                    })
                    .catch((err)=> {
                      console.log(err);
                    });
                    return  {...d}
                  }
                });
              });
            },
            putItem() {
              // console.log(1)
              this.axios.patch(this.urlArtikel,
                {
                  id: this.item.id,
                  sku: this.item.sku,
                  herstellersku: this.item.herstellersku,
                  kategorie: this.item.kategorie,
                  name: this.item.name,
                  menge: this.item.quantity,
                  geschäft: this.item.geschäft // InEbay===1?Ebay:Amazon
                },
              )
              .then(() => {
                // this.items = this.items.map(obj => (res.data.id === obj.id)?res.data:obj);
                // this.getItems();
                this.reset();
              });
            },

        },
        menu: [
            'Edit',
            'Copy',
            'Delete',
            'Print'
        ]
    }


