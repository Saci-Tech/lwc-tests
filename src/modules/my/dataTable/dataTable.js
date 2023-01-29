import { LightningElement, api, track, wire } from 'lwc';

export default class DataTable extends LightningElement {
    @api toShow = {
        Titulo: "Título teste!",
        Colunas: {
            "Coluna 0": {
                0: "dado 0-0",
                1: "dado 1-0",
                2: "dado 2-0",
                3: "dado 3-0",
                4: "dado 4-0",
                5: "dado 5-0"
            },
            "Coluna 1": {
                0: "dado 0-1",
                1: "dado 1-1",
                2: "dado 2-1",
                3: "dado 3-1",
                4: "dado 4-1",
                5: "dado 5-1"
            },
            "Coluna 2": {
                0: "dado 0-2",
                1: "dado 1-2",
                2: "dado 2-2",
                3: "dado 3-2",
                4: "dado 4-2",
                5: "dado 5-2"
            },
            "Coluna 3": {
                0: "dado 0-3",
                1: "dado 1-3",
                2: "dado 2-3",
                3: "dado 3-3",
                4: "dado 4-3",
                5: "dado 5-3"
            },
            "Coluna 4": {
                0: "dado 0-4",
                1: "dado 1-4",
                2: "dado 2-4",
                3: "dado 3-4",
                4: "dado 4-4",
                5: "dado 5-4"
            },
            "Coluna 5": {
                0: "dado 0-5",
                1: "dado 1-5",
                2: "dado 2-5",
                3: "dado 3-5",
                4: "dado 4-5",
                5: "dado 5-5"
            }
        }
    };
    caption = null;
    hasCaption = false;
    headingList = [];
    hasHeadings = false;
    valuesToShow = [];
    hasData = false;

    connectedCallback() {
        this.caption = this.toShow.Titulo;
        for (const key in this.toShow.Colunas) {
            if (Object.hasOwnProperty.call(this.toShow.Colunas, key)) {
                this.headingList.push(key);
                let tmp = [];
                for(const col in this.toShow.Colunas[key]) {
                    if(Object.hasOwnProperty.call(this.toShow.Colunas[key], col)) {
                        tmp.push(this.toShow.Colunas[key][col]);
                    }
                }
                this.valuesToShow.push(tmp);
            }
        }

        this.valuesToShow.forEach((value, idx) => {
            value.number = idx + 1;
        });
        console.log(this.valuesToShow);
        this.hasData = (this.valuesToShow.length > 0) ? true : false;
        this.hasCaption = (this.caption == null) ? false: true;
        this.hasHeadings = (this.headingList.length > 0) ? true : false;
    }
}
