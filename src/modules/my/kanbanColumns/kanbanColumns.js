import { LightningElement, api, track, wire } from 'lwc';

export default class KanbanColumns extends LightningElement {
    items;
    @api columns = [
        {
            idx: 0,
            name: "teste 0",
            items: [
                {
                    idx: 0,
                    header: "teste",
                    body: "teste teste",
                    color: "green"
                },
                {
                    idx: 1,
                    header: "teste 2",
                    body: "teste teste 2",
                    color: "yellow"
                },
                {
                    idx: 2,
                    header: "teste 3",
                    body: "teste teste 3",
                    color: "violet"
                },
                {
                    idx: 3,
                    header: "teste 3",
                    body: "teste teste 3",
                    color: "white"
                }
            ]
        },
        {
            idx: 1,
            name: "teste 1",
            items: []
        },
        {
            idx: 2,
            name: "teste 2",
            items: []
        },
    ];
    hasColumns = false;

    connectedCallback() {
        this.hasColumns = (this.columns.length > 0) ? true : false;
    }

    renderedCallback() {
        
    }

    handleOnShow(event) {
        addEventListener('dragstart', handleDragStart);
        addEventListener('dragend', handleDragEnd);
        console.log('Eventos adicionados');
    }

    handleDragStart(e) {
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
    
    handleDragEnd(e) {
    
        this.items.forEach(function(item) {
            item.classList.remove('over');
        });
    }
    
    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
    
        return false;
    }
    
    handleDragEnter(e) {
        this.classList.add('over');
    }
    
    handleDragLeave(e) {
        this.classList.remove('over');
    }

    handleDrop(e) {
        e.stopPropagation();
      
        if (dragSrcEl !== this) {
          dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
      
        return false;
      }

}