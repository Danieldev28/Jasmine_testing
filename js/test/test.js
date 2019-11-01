// // describe("calculator", function(){
// //     describe("describe function",function(){
// //         it("should return 20", function(){
// //             expect(multiplication(10,2)).toBe(20);
// //         })
// //          it("should return 40", function(){
// //             expect(multiplication(20,2)).toBe(40);
// //          })
// //       it ("should gnerate an alert of Error!", function(){
// //           spyon(window,"alert");
// //           multiplication("anything","nothing")
// //           except(window.alert).toHaveBeenCalledWith("Error");
// //       })
           
// //       }
// //     })
// // })

// // function multiplication(num1, num2){
// //     if (typeof(num1))
// // return (num1*num2);
// }

// ------end of my messed up code start of good code---->
describe("calculator", function(){
    describe("addition function", function(){
        it("should return 20", function(){
            expect(multiplication(10,2)).toBe(20);
        })
        it("should return 40", function(){
            expect(multiplication(20,2)).toBe(40);
        })
        // it("should return error", function(){
        //     expect(multiplication("anything","nothing")).toBe("Error!");
        // })
        it("should generate an alert of Error!", function(){
            spyOn(window, "alert");
            multiplication("anything","nothing")
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    })
})


function multiplication(num1, num2){
    if (typeof(num1) == "number" && typeof(num2) == "number"){
        return (num1*num2);
    }
    else{
        alert("Error!");
    }
    
}