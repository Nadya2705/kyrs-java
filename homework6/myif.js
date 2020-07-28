
var Name = prompt("Введіть своє ім'я");
var City = prompt("Введіть своє місто проживання");
var Agg = parseInt(prompt("Введіть свій вік"));

console.log(Name,City, Agg)
if( (Name.length != 0 && City.length != 0 && Agg.length != 0) &&
    (typeof Name === "string" && typeof City === "string" && typeof Agg === "number")
)
	{ if ( Agg >= 21 && Agg < 45 ) {
	alert(`Ласкаво просимо в клуб у місті ${City} танці та коктейлі до ранку`)
		} else {
			if (Agg <18) { alert(`Управління поліції в місті ${City} особа до 18 років намагалась потрапити в заклад`) }
				else { if (Agg >=18 && Agg < 21) { alert("Недостатній вік для входу в клуб") }
					else {
						alert("Ви застарі для цього клубу") }
					}
 				}
} else
 	{
 	alert("Ваші дані введені невірно")
 	};


