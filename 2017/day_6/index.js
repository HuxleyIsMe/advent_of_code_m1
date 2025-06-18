class Node {

    constructor(val, index){
        this.index = index
        this.value = val
        this.next = undefined
    }

    incrementValue(val = 1){
        this.value += val
    }

    clearValue() {
        this.value = 0
    }


}

class List {

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.currentMaxNode = undefined;
        this.currentMax = undefined;
        this.patternsLib = {}

   

    }

    addHead(head) {
        this.head = head
        this.currentMaxNode = head
    }

    addNode(node){
        let curr = this.head
        while(curr) {
            let next = curr.next
            if(!next) {
                this.tail = node
                curr.next = node
                break
            }
            curr = next
        }
    }

    joinMeTails() {
        this.tail.next = this.head
    }

    seek(){
      
        let building = []
    }

    run(){
        let toShare = 0;
        let curr = this.currentMaxNode;
        let candidate = this.currentMaxNode;
        let cycles = 0
      

        while(curr) {
        

            if(this.mode === 'SEEK') {
                building[curr.index] = (curr.value)
               
            
                if(curr.value > candidate.value || (curr.value === candidate.value && curr.index < candidate.index)) {
                    candidate = curr
                } 

                let next = curr.next

        
                if(next === this.currentMaxNode) {
                   
                    let result = building.join('');
                    if(seenPatterns[result]) {
                        console.log('we found it!', seenPatterns[result] - cycles)
                        this.printMaBebes()
                        break;
                    } else {
                        seenPatterns[result] = cycles
                        building =[]
                    }
                    // change our mode
                    this.mode = "GIVE"
                    // take the new candidates value 
                    toShare = candidate.value
                    // next loop should run from this one
                    curr = candidate.next
                    // we need to clear the candidate
                    candidate.clearValue();  
                    cycles++ 
                    
                    candidate = {value : 0, index: Infinity}
                   
                    continue
                }
                curr = next
            } else {
                if(toShare === 0) {
                    this.mode = 'SEEK'
                    this.currentMaxNode = curr
                    continue
                }
                
                // giving out
                curr.incrementValue()
                toShare--
                curr = curr.next

            }
        }
    }

    printMaBebes() {
        let curr = this.head
        while(curr) {
            console.log(curr.value)
            let next = curr.next

              if(next === this.head) {
                console.log('we looped')
                break
              }
            curr = next
        }
    }
}


let list = [14,0,15,12,11,11,3,5,1,6,8,4,9,1,8,4]
// let list = [0,2,7,0]


const Reli = new List()


const nodes = list.map((val, index) => new Node(val, index))

Reli.addHead(nodes.shift())

nodes.forEach(val => Reli.addNode(val))


Reli.joinMeTails()


Reli.run()

