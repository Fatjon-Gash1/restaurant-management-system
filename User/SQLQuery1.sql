create database RMSDB

use RMSDB

create table Drink(
DrinkId  int identity(1,1),
DrinkName varchar(100),
Price decimal(3,1)
)
insert into Drink values('Fanta',1.0) 

create table FoodItem(
FoodItemId  int identity(1,1),
FoodItemName  varchar(100),
Price decimal(3,1)
)
insert into FoodItem values('Fli',19.0) 


create table Other(
OtherId  int identity(1,1),
OtherName  varchar(100),
Price decimal(3,1)
)
insert into Other values('Akullore',0.5) 

create table Restaurant(
RestaurantId  int identity(1,1),
RestaurantName  varchar(100)
)
insert into Restaurant values('Restaurant Era') 

create table Useri(
UserId  int identity(1,1),
UserName  varchar(100),
Restaurant varchar(100),
FoodItem varchar(100),
Drink varchar(100)
)
insert into Useri values('fatjon','Restaurant Era','Chicken','Cola') 
-----------------------------------------------------------------------------
create table Tradicional
(
TradicionalId  int identity(1,1),
TradicionalName  varchar(100),
Price decimal(3,1)
)

create table FastFood
(
FastFoodId  int identity(1,1),
FastFoodName  varchar(100),
Price decimal(3,1)
)

insert into FastFood values('Pite',2.0) 


insert into Tradicional values('Pite',2.0) 


create table ChineseFoods
(
ChineseFoodsId  int identity(1,1),
ChineseFoodsName  varchar(100),
Price decimal(3,1)
)

insert into ChineseFoods values('Pite',2.0) 


create table ItalianFoods
(
ItalianFoodsId  int identity(1,1),
ItalianFoodsName  varchar(100),
Price decimal(3,1)
)

insert into ItalianFoods values('Pite',2.0) 

create table SeaFoods
(
SeaFoodsId  int identity(1,1),
SeaFoodsName  varchar(100),
Price decimal(3,1)
)

insert into SeaFoods values('Pite',2.0) 

create table Salads
(
SaladsId  int identity(1,1),
SaladsName  varchar(100),
Price decimal(3,1)
)

insert into Salads values('Pite',2.0) 

create table Desserts
(
DessertsId  int identity(1,1),
DessertsName  varchar(100),
Price decimal(3,1)
)

insert into Desserts values('Pite',2.0) 



create table Hof(
name varchar(100),
price decimal(3,1),
data datetime
)
insert into Hof values('fatjon','1.5', getdate()) 

Delete  from Hof
----------------------------------Drinks


create table Alcoholic
(
AlcoholicId  int identity(1,1),
AlcoholicName  varchar(100),
Price decimal(3,1)
)

insert into Alcoholic values('Akullore',0.5) 

create table NonAlcoholic
(
NonAlcoholicId  int identity(1,1),
NonAlcoholicName  varchar(100),
Price decimal(3,1)
)

insert into NonAlcoholic values('Akullore',0.5) 

create table Tea
(
TeaId  int identity(1,1),
TeaName  varchar(100),
Price decimal(3,1)
)

insert into Tea values('Akullore',0.5) 


insert into Tradicional values('fli',0.5) 


create table Coffee
(
CoffeeId  int identity(1,1),
CoffeeName  varchar(100),
Price decimal(3,1)
)

insert into Coffee values('Akullore',0.5) 


create table OtherD(
OtherDId  int identity(1,1),
OtherDName  varchar(100),
Price decimal(3,1)
)
insert into OtherD values('Akullore',0.5) 

create table Hod(
name varchar(100),
price decimal(3,1),
data datetime
)
insert into Hod values('fatjon','1.5', getdate()) 

-----Porosia

create table Food(
FID int identity(11,1),
Kodi varchar(200),
ChineseFoods varchar(200),
ItalianFoods varchar(200),
Desserts varchar(200),
SeaFoods varchar(200),
FastFood varchar(200),
Tradicional varchar(200),
Salads varchar(200),
Other varchar(200),
TotalP decimal (3,1)
)
insert into Food values('fatjon','fatjon','fatjon','fatjon','fatjon','fatjon','fatjon','fatjon','fatjon','3.3') 



                    delete from Food
                    where Tavolina = 'Ismet' 
                    

create table Drinks(
DID int identity(11,1),
Kodi varchar(200),
Alcoholic varchar(200),
NonAlcoholic varchar(200),
Tea varchar(200),
Coffee varchar(200),
OtherD varchar(200),
TotalP decimal (3,1)
)

insert into Drinks values('fatjon','fatjon','fatjon','fatjon','fatjon','fatjon','3.3') 


create table Kodi(
KodiId int identity(1,1),
KodiName varchar(300)
)

insert into Kodi values('777777') 

