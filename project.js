const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");
//UI objesini başlatma

const ui = new UI();


const storage = new Storage();
//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);

}

    cardbody.addEventListener("click",deleteCar);
function addCar(e){
    e.preventDefault();

    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url ===""){


    ui.displayMassages("Tüm alanları doldurun..","danger");
    }
    else {
        // yeni araç
        const newCar = new Car(title,price,url);

        ui.addCarToUI(newCar); //arayüze araç ekleme işlemi

        storage.addCarToStorage(newCar);

        ui.displayMassages("Araç başarıyla eklendi..","success")
    }
    ui.clearInputs(titleElement,urlElement,priceElement);

    

}

function deleteCar(e){
    
    if(e.target.id ==="delete-car"){
        ui.deleteCarFromUI(e.target);
    }

}
function clearAllCars(){
    ui.clearAllCarsFromUI();
    
}