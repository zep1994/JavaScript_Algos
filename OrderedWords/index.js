function order(words) {
    let split_words = words.split(" ")
    //console.log(split_words)
    let ordered_words = []
    let order_of_numbers = []
    for (let i of split_words) {
        //check if array is null
        //find the number with 1 
        // for (let j of split_words) {
        //     let split_letters = j.split("")
        //     console.log(split_letters)
        // }
        remove_number(i)
        //if not  
        //loop through array
        //for every word, look at the number
        // if num > num_in_array, push
        //remove the number
    }

    //console.log(ordered_words.join(' '))
}

function remove_number(word) {
    let split_letters = word.split("")
    for (let letter of split_letters) {
        let num = parseInt(letter)
        if (num) {
            num.push(order_of_numbers)
            word.indexOf(num).delete
        }
    }
}

order("is2 Thi1s T4est 3a")