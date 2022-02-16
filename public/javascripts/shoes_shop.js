//get the list of all shoes
function lists(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var table = document.querySelector('tbody');
          var list = JSON.parse(this.responseText);

        for (i = 0; i < list.length; i++) {
            var row = document.createElement('tr');
            // var Id = document.createElement('th');
            var Size = document.createElement('td');
            var Style = document.createElement('td');
            var Brand = document.createElement('td');
            var Price = document.createElement('td');
            // Id.innerText = list[i].room_id;
            Size.innerText = list[i].s_size;
            Style.innerText = list[i].s_style;
            Brand.innerText = list[i].brand;
            Price.innerText = list[i].price;

            // row.appendChild(Id);
            row.appendChild(Size);
            row.appendChild(Style);
            row.appendChild(Brand);
            row.appendChild(Price);

            table.appendChild(row);
        }
      }
    };
    xhttp.open("GET", "/lists", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

// lists();

//search the specific shoes
function search(){

        var s_size = parseInt(document.getElementById("s_size").value);
        var s_style = document.getElementById("s_style").value;
        var brand = document.getElementById("brand").value;
        var price = parseInt(document.getElementById("price").value);
        var price2 = parseInt(document.getElementById("price2").value);

        var data = {'s_size' : s_size, 's_style' : s_style, 'brand' : brand, 'price' : price, 'price2' : price2};

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

      //console.log(list);

        var result = document.querySelector('tbody');
         var list = JSON.parse(this.responseText);


      for (i = 0; i < list.length; i++) {
            var row = document.createElement('tr');
            // var Id = document.createElement('th');
            var Size = document.createElement('td');
            var Style = document.createElement('td');
            var Brand = document.createElement('td');
            var Price = document.createElement('td');
            // Id.innerText = list[i].room_id;
            Size.innerText = list[i].s_size;
            Style.innerText = list[i].s_style;
            Brand.innerText = list[i].brand;
            Price.innerText = list[i].price;

            // row.appendChild(Id);
            row.appendChild(Size);
            row.appendChild(Style);
            row.appendChild(Brand);
            row.appendChild(Price);

            result.appendChild(row);

      }
      }

    };
    xhttp.open("POST","/shoes_search", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}

var vueinst = new Vue({
   el: '#app',
   data: {
       show_main: true
   }
});