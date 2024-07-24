import { Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { LocalServiceService } from 'src/app/shared/service/local-service.service';
// import { LocalServiceService } from '../local-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private localService:LocalServiceService) {
    
  //  console.log('add',localService.addition(2,3));

  //  }

  // @Input() data: string;
  // ngOnChanges(changes: SimpleChanges) {

  //   console.log('ngOnChanges - data changed:', changes.data.currentValue);

  // }
 

  // ngOnInit(): void {
  // }

  
  activeSection: string = '';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  
  value1: string = '';
  value2: string = '';
  variablesExample: string = '';

  showVariablesExample() {
    const x = this.value1;
    const y = this.value2;
    const z = x + y;

    this.variablesExample = `
      // Declaring variables with user inputs
      var x = ${x};
      let y = ${y};
      const z = x + y;

      // Displaying values
      console.log(x); // ${x}
      console.log(y); // ${y}
      console.log(z); // ${z}
    `;
  };

  input1: any; 
  input2: any;
  selectedOperator: any;
  result: any;

  performOperation() {
    switch (this.selectedOperator) {
      case '+':
        this.result = this.input1 + this.input2;
        break;
      case '-':
        this.result = this.input1 - this.input2;
        break;
      case '*':
        this.result = this.input1 * this.input2;
        break;
      case '/':
        this.result = this.input1 / this.input2;
        break;
      case '%':
        this.result = this.input1 % this.input2;
        break;
      case '==':
        this.result = this.input1 == this.input2;
        break;
    
      default:
        this.result = 'Invalid operator';
    }
  }

  output:String='';

  hoisting() {
     this.output =
  `  'Example 1: Variable Hoisting',
    'Before declaration: undefined',  // Simulating hoisting behavior
    'After declaration: I am hoisted',

    'Example 2: Function Hoisting',
    'Calling function before declaration: I am a hoisted function', // Simulating hoisting behavior
    'Calling function after declaration: I am a hoisted function'
  `}


  number: number | null = null;
  loopType: string = 'for';
  resultList: number[] = [];

  displayLoop() {
    if (this.number === null || this.number <= 0) {
      this.resultList = [];
      this.resultList.push(NaN); // Representing the error with NaN
      return;
    }

    switch (this.loopType) {
      case 'for':
        this.forLoop(this.number);
        break;
      case 'while':
        this.whileLoop(this.number);
        break;
      case 'doWhile':
        this.doWhileLoop(this.number);
        break;
      default:
        this.resultList = [];
        this.resultList.push(NaN); // Representing the error with NaN
    }
  }

  forLoop(number: number) {
    this.resultList = [];
    for (let i = 1; i <= number; i++) {
      this.resultList.push(i);
    }
  }

  whileLoop(number: number) {
    this.resultList = [];
    let i = 1;
    while (i <= number) {
      this.resultList.push(i);
      i++;
    }
  }

  doWhileLoop(number: number) {
    this.resultList = [];
    let i = 1;
    do {
      this.resultList.push(i);
      i++;
    } while (i <= number);
  }


  // arrayInput: string = '';
  // arrayMethod: string = 'sort';
  // extraInput: string = '';
  // originalArray: string[] = [];
  // resultArray: any = null;

  // applyArrayMethod() {
  //   let array = this.arrayInput.split(',').map(item => item.trim());
  //   this.originalArray = [...array];
  //   let result;

  //   switch (this.arrayMethod) {
  //     case 'sort':
  //       result = array.sort();
  //       break;
  //     case 'reverse':
  //       result = array.reverse();
  //       break;
  //     case 'pop':
  //       array.pop();
  //       result = array;
  //       break;
  //     case 'push':
  //       array.push(this.extraInput);
  //       result = array;
  //       break;
  //     case 'shift':
  //       array.shift();
  //       result = array;
  //       break;
  //     case 'unshift':
  //       array.unshift(this.extraInput);
  //       result = array;
  //       break;
  //     case 'map':
        
  //       result = array.map(item => parseInt(item) * 2);
  //       break;
  //     case 'filter':
  //       result = array.filter(item => parseInt(item) > 2);
  //       break;
  //     case 'forEach':
  //       let forEachResult: number[] = [];
  //       array.forEach(x => forEachResult.push(parseInt(x) * 10));
  //       result = `Array after forEach the values multiplied by 10 is: ${forEachResult}`;
  //       break;
  //     case 'find':
  //       result = `Here I am finding array values greater than 2: ${array.find(x => parseInt(x) > 2)}`;
  //       break;
  //     case 'slice':
  //       result = `Array after slice(1, 3): ${array.slice(1, 3)}`;
  //       break;
  //     case 'splice':
  //       array.splice(1, 1, 'newElement');
  //       result = `Array after splice(1, 1, 'newElement'): ${array}`;
  //       break;
  //     case 'indexOf':
  //       result = `Index of '2' in array: ${array.indexOf('2')}`;
  //       break;
  //     default:
  //       result = 'Invalid method';
  //   }

  //   this.resultArray = result;
  // }

  // onMethodChange() {
  //   if (this.arrayMethod === 'push' || this.arrayMethod === 'unshift') {
  //     this.extraInput = '';
  //   } else {
  //     this.extraInput = '';
  //   }
  // }

  arrayInput: string = '';
  arrayMethod: string = 'sort';
  extraInput: string = '';
  additionalInput1: string = '';
  additionalInput2: string = '';
  originalArray: string[] = [];
  resultArray: any = null;

  applyArrayMethod() {
    let array = this.arrayInput.split(',').map(item => item.trim());
    this.originalArray = [...array];
    let result;

    switch (this.arrayMethod) {
      case 'sort':
        result = array.sort();
        break;
      case 'reverse':
        result = array.reverse();
        break;
      case 'pop':
        array.pop();
        result = array;
        break;
      case 'push':
        array.push(this.extraInput);
        result = array;
        break;
      case 'shift':
        array.shift();
        result = array;
        break;
      case 'unshift':
        array.unshift(this.extraInput);
        result = array;
        break;
      case 'map':
        const mapMultiplier = parseInt(this.additionalInput1);
        result = array.map(item => parseInt(item) * mapMultiplier);
        break;
      case 'filter':
        const filterValue = parseInt(this.additionalInput1);
        result = array.filter(item => parseInt(item) > filterValue);
        break;
      case 'forEach':
        let forEachResult: number[] = [];
        array.forEach(x => forEachResult.push(parseInt(x) * 10));
        result = `Array after forEach the values multiplied by 10 is: ${forEachResult}`;
        break;
      case 'find':
        const findValue = parseInt(this.additionalInput1);
        result = `Here I am finding array values greater than ${findValue}: ${array.find(x => parseInt(x) > findValue)}`;
        break;
      case 'slice':
        const sliceStart = parseInt(this.additionalInput1);
        const sliceEnd = parseInt(this.additionalInput2);
        result = `Array after slice(${sliceStart}, ${sliceEnd}): ${array.slice(sliceStart, sliceEnd)}`;
        break;
      case 'splice':
        const spliceIndex = parseInt(this.additionalInput1);
        const spliceDeleteCount = parseInt(this.additionalInput2);
        array.splice(spliceIndex, spliceDeleteCount, 'newElement');
        result = `Array after splice(${spliceIndex}, ${spliceDeleteCount}, 'newElement'): ${array}`;
        break;
      case 'indexOf':
        result = `Index of '${this.additionalInput1}' in array: ${array.indexOf(this.additionalInput1)}`;
        break;
      default:
        result = 'Invalid method';
    }

    this.resultArray = result;
  }

  onMethodChange() {
    this.extraInput = '';
    this.additionalInput1 = '';
    this.additionalInput2 = '';
  };
 
  // objectProperties: string = '';
  // objectMethod: string = '';
  // extraInput1: string = '';
  // originalObject: any = {};
  // resultObject: any = {};

  // applyObjectMethod() {
  //   try {
  //     const propertiesArray = this.objectProperties
  //       .split(',')
  //       .map(item => item.trim());
  //     let object: any = {};

  //     propertiesArray.forEach(prop => {
  //       let [key, value] = prop.split(':').map(item => item.trim());
  //       object[key] = value;
  //     });

  //     this.originalObject = { ...object };
  //     let result;

  //     switch (this.objectMethod) {
  //       case 'keys':
  //         result = Object.keys(object);
  //         break;
  //       case 'values':
  //         result = Object.values(object);
  //         break;
  //       case 'entries':
  //         result = Object.entries(object);
  //         break;
  //       case 'hasOwnProperty':
  //         result = object.hasOwnProperty(this.extraInput);
  //         break;
  //       default:
  //         result = 'Invalid method';
  //     }

  //     this.resultObject = result;
  //   } catch (error:any) {
  //     this.originalObject = 'An error occurred';
  //     this.resultObject = error.message;
  //   }
  // }

  objectProperties: string = '';
  objectMethod: string = 'keys';
  extraInput1: string = '';
  originalObject: any = {};
  result1: any;
  error :  string = '';

  applyObjectMethod() {
    try {
      const propertiesArray = this.objectProperties
        .split(',')
        .map((item) => item.trim());
      let object: any = {};

      propertiesArray.forEach((prop) => {
        let [key, value] = prop.split(':').map((item) => item.trim());
        object[key] = value;
      });

      this.originalObject = { ...object };

      switch (this.objectMethod) {
        case 'keys':
          this.result1 = Object.keys(object);
          break;
        case 'values':
          this.result1 = Object.values(object);
          break;
        case 'entries':
          this.result1 =Object.entries(object);
          break;
        case 'hasOwnProperty':
          this.result1 =  object.hasOwnProperty(this.extraInput1);
          break;
        default:
          this.result1 = 'Invalid method';
      }
    } catch (error) {
      this.originalObject = 'An error occurred';
      // this.result = error.message;
    }
  }

  stringInput: string = '';
  stringMethod: string = 'toUpperCase';
  extraInput2: string = '';
  extraInputOld: string = '';
  extraInputNew: string = '';
  showExtraInput: boolean = false;
  showReplaceInputs: boolean = false;
  originalString: string = '';
  resultString: any = '';

  applyStringMethod() {
    this.originalString = this.stringInput;
    let result;

    switch (this.stringMethod) {
      case 'toUpperCase':
        result = this.stringInput.toUpperCase();
        break;
      case 'toLowerCase':
        result = this.stringInput.toLowerCase();
        break;
      case 'charAt':
        result = this.stringInput.charAt(Number(this.extraInput2));
        break;
      case 'length':
        result = this.stringInput.length;
        break;
      case 'trim':
        result = this.stringInput.trim();
        break;
      case 'split':
        result = JSON.stringify(this.stringInput.split(this.extraInput2));
        break;
      case 'reverse':
        result = this.stringInput.split('').reverse().join('');
        break;
      case 'includes':
        result = this.stringInput.includes(this.extraInput2);
        break;
      case 'replace':
        result = this.stringInput.replace(this.extraInputOld, this.extraInputNew);
        break;
      default:
        result = 'Invalid method';
    }

    this.resultString = result;
  }

  onMethodChange1() {
    this.showExtraInput = ['charAt', 'includes'].includes(this.stringMethod);
    this.showReplaceInputs = this.stringMethod === 'replace';
    this.extraInput2 = '';
    this.extraInputOld = '';
    this.extraInputNew = '';
  }
  initialValue: number | null = null;
  closureMessage: string = '';
  closureResult: string = '';
  closureFunction: (() => number) | null = null;

  createClosure() {
    if (this.initialValue === null || isNaN(this.initialValue)) {
      this.closureMessage = 'Please enter a valid number.';
      this.closureFunction = null;
    } else {
      this.closureFunction = this.createClosureFunction(this.initialValue);
      this.closureMessage = `Closure created with initial value: ${this.initialValue}`;
      this.closureResult = '';
    }
  }

  increment() {
    if (this.closureFunction) {
      const currentCount = this.closureFunction();
      this.closureResult = `Counter value: ${currentCount}`;
    }
  }

  private createClosureFunction(initialValue: number): () => number {
    let count = initialValue;

    return function () {
      count++;
      return count;
    };
  }

  numberInput: string = '';
  cumulativeSum: number = 0;
  curryingResult: string = 'Current sum: 0';

  ngOnInit(): void {
    this.curriedFunction = this.curryAddition(this.cumulativeSum);
  }

  curryAddition(a: number) {
    return (b: number) => a + b;
  }

  addNumber(): void {
    const number = parseFloat(this.numberInput);

    if (isNaN(number)) {
      this.curryingResult = 'Please enter a valid number.';
    } else {
      this.cumulativeSum = this.curriedFunction(number);
      this.curriedFunction = this.curryAddition(this.cumulativeSum);
      this.curryingResult = `Current sum: ${this.cumulativeSum}`;
      this.numberInput = '';
    }
    
  }
  // constructor(){
  private curriedFunction!: (b: number) => number;
  // }

 
  
  person = {
    name: ''
  };
  output1: string = '';

  thisKeywordExample() {
    const person = {
      name: this.person.name,
      greet: function() {
        return `Hello, my name is ${this.name} :) the name is calling using this keyword`;
      }
    };

    this.output1 = person.greet();
  };

  person1 = {
    fname: '',
    lname: '',
    fullname: function() {
      return this.fname + ' ' + this.lname;
    }
  };

  output2: string = '';
  output3: string = '';

  callAndApply() {
    const p1 = {
      fname: this.person1.fname,
      lname: this.person1.lname + ' :) is the name using call() method'
    };

    const p2 = {
      fname: this.person1.fname,
      lname: this.person1.lname + ' :) is the name using apply() method'
    };

    this.output2 = this.person1.fullname.call(p1);
    this.output3 = this.person1.fullname.apply(p2);
  };

  person2 = {
    firstName: '',
    lastName: '',
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };

  output4: string = '';

  bindMethodExample() {
    const boundGetFullName = this.person2.getFullName.bind(this.person2);
    this.output4 = boundGetFullName();
  };

  name: string = '';
  prototypeMessage: string = '';
  greetResult: string = '';
  greetButtonVisible: boolean = false;
  personInstance: Person | null = null;

  createPerson() {
    const name = this.name.trim();

    if (name === '') {
      this.prototypeMessage = 'Please enter a valid name.';
      this.greetButtonVisible = false;
    } else {
      this.personInstance = new Person(name);
      this.prototypeMessage = `Person created with name: ${name}`;
      this.greetButtonVisible = true;
      this.greetResult = '';
    }
  }

  greet() {
    if (this.personInstance) {
      this.greetResult = this.personInstance.greet();
    }
  }
}

class Person {
  constructor(public name: string) {}

  greet() {
    return `Hello, my name is ${this.name}`;
  };
      
  // jsonData: string = '';
  // tableHeaders: string []= [];
  // tableData: number[] = [];

  // onSubmit1(): void {
  //   try {
  //     const dataArray = JSON.parse(this.jsonData);
      
  //     if (Array.isArray(dataArray)) {
  //       this.displayData(dataArray);
  //     } else {
  //       alert('Please enter a valid JSON array.');
  //     }
  //   } catch (error) {
  //     alert('Invalid JSON data. Please enter a valid JSON array.');
  //   }
  // }

  // displayData(data: any[]): void {
  //   this.tableHeaders = [];
  //   this.tableData = [];

  //   if (data.length > 0) {
  //     // Create table headers based on the keys of the first object
  //     this.tableHeaders = Object.keys(data[0]);
  //     this.tableData = data;
  //   }
  // }

  // numberInput3: number | null = null;
  // promiseResult: string = '';
  // caseType: string = 'double';
  // customOperation: string = '';

  // processNumber(number: number, caseType: string): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (isNaN(number)) {
  //         reject("Invalid number");
  //       } else {
  //         switch(caseType) {
  //           case 'double':
  //             resolve(`The result of doubling ${number} is ${number * 2}`);
  //             break;
  //           case 'square':
  //             resolve(`The result of squaring ${number} is ${number * number}`);
  //             break;
  //           case 'cube':
  //             resolve(`The result of cubing ${number} is ${number * number * number}`);
  //             break;
  //           case 'custom':
  //             try {
  //               const customResult = eval(this.customOperation.replace('x', number.toString()));
  //               resolve(`The result of custom operation on ${number} is ${customResult}`);
  //             } catch (error) {
  //               reject("Invalid custom operation");
  //             }
  //             break;
  //           default:
  //             reject("Unknown case type");
  //         }
  //       }
  //     }, 1000);
  //   });
  // }

  // startProcess() {
  //   if (this.numberInput3 === null) {
  //     this.promiseResult = 'Please enter a number.';
  //     return;
  //   }

  //   this.promiseResult = 'Processing...';
  //   this.processNumber(this.numberInput3, this.caseType)
  //     .then((result) => {
  //       this.promiseResult = result;
  //     })
  //     .catch((error) => {
  //       this.promiseResult = `Error: ${error}`;
  //     });
  // }

  // inputValue: string = '';
  // promiseResult: string = '';


  // handlePromise() {
  //   this.fakeApiCall(this.inputValue)
  //     .then(response => {
  //       this.promiseResult = `Success: ${response}`;
  //     })
  //     .catch(error => {
  //       this.promiseResult = `Error: ${error}`;
  //     });
  // }

  // fakeApiCall(value: string): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (value) {
  //         resolve(`Received input: ${value}`);
  //       } else {
  //         reject('No input provided');
  //       }
  //     }, 2000);
  //   });
  // }




}