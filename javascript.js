// exercise 1

for (var sum = 0; sum < 1000; sum++){
    if ((sum % 3 == 0) || (sum % 5 ==0)) {
        console.log(sum);
    }
}


// exercise 2
function fibonacci(max) {
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length -1] + fib_list[fib_list.length-2];
        }
        
        return fib_list;
        
    } else {
        return [1,1];
    }
        
}
    
function even(n){
    return n % 2 === 0;
}

function filter(f, list){
    var evenList = [];
    for (var i =0; i<list.length; i++) {
        var item = list[i];
        if (f(item) === true) {
            evenList.push(item);
        }
    }
    return evenList;
}

function sum(list){
    var sumTotal = 0;
    for (var i=0; i<list.length; i++){
        sumTotal = sumTotal + list[i];
    }
   return sumTotal;
}

console.log(sum(filter(even, fibonacci(4000000))));





// Exercise 3

var votesToGoEatCake = [true, true, true, true];

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"]

function duplicates(list) {
    var non_duplicate_list = [];
    var duplicate_list = [];
    for (var i = 0; i < list.length; i++) {
        //checking if Katie is in non_duplicate list
        if (non_duplicate_list.indexOf(list[i]) > -1) { 
            // Katie is in non_duplicate list
            //console.log("item: " + list[i] + " list: " + non_duplicate_list);
            
            // if Katie is already in duplicate list, pass
            if (duplicate_list.indexOf(list[i]) > -1) {
                continue;
            }
            else {
                duplicate_list.push(list[i]); 
            }    
        } else { 
            non_duplicate_list.push(list[i]);
        }    
        
    }

    return duplicate_list;
}    

new_list = duplicates(hackbrightStudents);

console.log(new_list);



//Exercise 4
var cat = {
        tiredness: 20,
        hunger: 20,
        lonliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(food){
            console.log("Om nom nom");
            this.hunger = this.hunger + food.length - 5;
            console.log('hunger is ' + this.hunger);
        },
        sleep: function(){
            console.log("I'm so sleepy.");
            this.tiredness = this.tiredness - 10;
            console.log('tiredness is ' + this.tiredness);
        },
        pet: function(){
            console.log("Purr");
            this.lonliness = this.lonliness -5;
            this.happiness = this.happiness + 5;
            console.log('lonliness is ' + this.lonliness);
            console.log('happiness is ' + this.happiness);
        },
        status: function(){
            console.log('tiredness is '+ this.tiredness);
            console.log('hunger is ' + this.hunger);
            console.log('lonliness is ' + this.lonliness);
            console.log('happiness is ' + this.happiness);
        },
}; 

cat.feed("salmon");
cat.status();
