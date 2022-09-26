fetch("https://restcountries.com/v3.1/lang/spa")
    .then(function (response)
    {
        return response.json();
    })
    .then(function (json)
    {

        console.log(json);


        for (var i = 0; i < json.data.spa.length; i++)
        {

            var onespa = "<img width='100%' src='" + json.data.spa[i].url + "'><span>" + json.data.spa[i].name + "</span>";
            document.querySelector("#contents").innerHTML += "<div class='onespa'>" + onespa + "</div>";
        }
    })
    .catch(function (error)
    {
        console.log('Request failed', error);
    });