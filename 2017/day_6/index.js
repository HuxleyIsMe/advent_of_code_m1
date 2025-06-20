

class Person {
  constructor(wealth, index) {
    this.index = index;
    this.wealth = wealth;
    this.next = null;
    this.previous = null;
    this.nextHelpfulNeighbor = this.next
    this.previousHelpfulNeighbor = this.previous
  }

  helpNeighbor() {
    if(this.wealth > 0 ) {
      this.wealth -=1
      return 1
    }
    return 0
  }

  iNeedHelp(){

    if(!this.nextHelpfulNeighbor || !this.previousHelpfulNeighbor) {
      this.nextHelpfulNeighbor = this.next
      this.previousHelpfulNeighbor = this.previous
    }


    let collection = this.nextHelpfulNeighbor.helpNeighbor() + this.previousHelpfulNeighbor.helpNeighbor()

    if(!this.nextHelpfulNeighbor.value) {
      this.nextHelpfulNeighbor = this.nextHelpfulNeighbor.next
    }

    if(!this.previousHelpfulNeighbor.value) {
      this.previousHelpfulNeighbor = this.previousHelpfulNeighbor.previous
    }

    this.wealth += collection
  }

  decrementWealth(amount) {
    this.wealth -= amount
    while(this.wealth < 0) {
      this.iNeedHelp()
    }
    this.nextHelpfulNeighbor = this.next
    this.previousHelpfulNeighbor = this.previous
  }


  incrementWealth(amount = 1) {
    this.wealth += amount;
  }

  shareWealth() {
    const total = this.wealth;
    this.wealth = 0;
    return total;
  }
}

class Socialism {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentWealthiest = null;
    this.mode = 'FIND_WEALTH';
  }

  addHead(head) {
    this.head = head;
    this.currentWealthiest = head;
  }

  addNode(node) {
    let curr = this.head;
    while (curr.next) {
      curr.next.previous = curr
      curr = curr.next;
    }
    node.previous = curr
    curr.next = node;
    this.tail = node;
  }

  joinCircular() {
    if (this.tail && this.head) {
      this.tail.next = this.head;
      this.head.previous = this.tail
    }
  }

  isWealthier(a, b) {
    return a.wealth > b.wealth || (a.wealth === b.wealth && a.index < b.index);
  }

  /** I should refactor this but i was having a mo of i want a continual one looop situations  */
  // run() {
  //   const seen = {};
  //   let wealthDistribution = [];
  //   let toShare = 0;
  //   let curr = this.currentWealthiest;
  //   let candidate = this.currentWealthiest;
  //   let cycles = 0;

  //   while (curr) {
  //     if (this.mode === 'FIND_WEALTH') {
  //       wealthDistribution[curr.index] = curr.wealth;

  //       if (this.isWealthier(curr, candidate)) {
  //         candidate = curr;
  //       }

  //       if (curr.next === this.currentWealthiest) {
  //         const key = wealthDistribution.join('');
  //         if (seen[key]) {
  //           console.log('Redistribution cycle detected!', cycles - seen[key]);
  //           this.printLoop();
  //           break;
  //         } else {
  //           seen[key] = cycles;
  //           wealthDistribution = [];
  //         }

  //         this.mode = 'SHARE';
  //         curr = candidate.next;
  //         toShare = candidate.shareWealth();
  //         candidate = { wealth: 0, index: Infinity };
  //         cycles++;
  //         continue;
  //       }

  //       curr = curr.next;
  //     } else {
  //       if (toShare === 0) {
  //         this.mode = 'FIND_WEALTH';
  //         this.currentWealthiest = curr;
  //         continue;
  //       }

  //       curr.incrementWealth();
  //       toShare--;
  //       curr = curr.next;
  //     }
  //   }
  // }

  printLoop() {
    let curr = this.head;
    const seen = new Set();
    const output = [];

    while (curr && !seen.has(curr)) {
      output.push(curr.wealth);
      seen.add(curr);
      curr = curr.next;
    }

    console.log(output.join(' -> '));
    console.log('Updated');
  }
}

// === INIT ===

const initialWealth = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4];
const Community = new Socialism();

const people = initialWealth.map((wealth, index) => new Person(wealth, index));
Community.addHead(people.shift());
people.forEach(person => Community.addNode(person));
Community.joinCircular();
// console.log(Community.head)

console.log('before')
Community.printLoop()
// let testNode = people[6]
// testNode.decrementWealth(10)
// console.log('\n after \n') 
// Community.printLoop()


setInterval(() => {
  let target = people[Math.floor((Math.random() * people.length))]
  let val = Math.floor(Math.random() * 5)

  let luck = Math.random()

  if(luck > 0.5) {
    console.log('good luck', target.index, val)
    target.incrementWealth(val)
  } else {
    console.log('bad luck',target.index, val)
    target.decrementWealth(val)
  }

  Community.printLoop()
}, 5000)

// Community.run();
