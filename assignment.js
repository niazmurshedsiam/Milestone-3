
    //1th solution

    function kilometerToMeter(kilometer) {
        if (kilometer >= 0) {
            var meter = kilometer * 1000;
            return meter;
        }
        else
            return "Distance cannot be negative."
    
    }


    
    
    //2nd solution
        
    function budgetCalculator(budgeClock, budgePhone, budgeLaptop){
        if (budgeClock < 0 || budgePhone < 0 || budgeLaptop < 0) {
            return "None of them cannot be a negative number";
        }
        else {
            let clock = budgeClock * 5;
            let phone = budgePhone * 3;
            let laptop = budgeLaptop * 1;
            let total = clock + phone + laptop;
            return total;
            
        }
    };
    
    
    
    // 3rd solution


    function hotelCost(hotelStay){
        if (hotelStay >=1 && hotelStay <=10){
            let totalStay = hotelStay * 100;
            return totalStay;
        }
        else if (hotelStay >= 11 && hotelStay <= 20) {
            let firstHotelStay = 10 * 100;
            let remaining = hotelStay - 20 ;
            let secondHotelStay = remaining * 80 ;
            totalStay = firstHotelStay + secondHotelStay ;
            return totalStay;
        }
        else if (hotelStay > 21){
            let firstHotelStay = 10 * 100 ;
            let secondHotelStay = 10 * 80 ;
            let remaining = hotelStay - 50 ;
            let thirdHotelStay = remaining * 50 ;
            totalStay = firstHotelStay + secondHotelStay + thirdHotelStay ;
            return totalStay;
        }
        else {
            if( hotelStay <= -1){
                return "Sorry enter positive number";
            } 
        }
        return totalStay;
        };
       
    
    
    
    
    // 4th solution
    
    
    
    function megaFriend(friends) {
        var megaNameLength = friends[0].length;
        if (friends === undefined || friends.length == 0) {
            return "Friend does not exist"
        }
    
        else {
            for (let i = 0; i < friends.length; i++) {
                var currentNameLength = friends[i].length;
                if (currentNameLength > megaNameLength) {
                    megaNameLength = currentNameLength;
                }
            }
        }
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length == megaNameLength) {
                return friends[i]
            }
        }
    }