create database RMSDB

use RMSDB

create table Drink(
DrinkId  int identity(1,1),
DrinkName varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('Drink', RESEED, 1)
insert into Drink (DrinkName, Price) 
values 
	('Fanta', 1.50),
	('Coca Cola', 1.20),
	('Sprite', 1.50),
	('Pepsi', 0.99),
	('Jaffa Peach', 1.99),
	('Jaffa Blueberry', 1.99),
	('Jaffa Multivitamin', 1.99),
	('Sola', 0.99),
	('Ice tea', 0.99)

create table FoodItem(
FoodItemId  int identity(1,1),
FoodItemName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('FoodItem', RESEED, 1)
insert into FoodItem (FoodItemName, Price) values('nul', 19.99) 


create table Other(
OtherId  int identity(1,1),
OtherName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('Other', RESEED, 1)
insert into Other (OtherName, Price) values('nul', 0.50) 

create table Restaurant(
RestaurantId  int identity(1,1),
RestaurantName  varchar(100),
Lokacioni  varchar(100)
)
DBCC CHECKIDENT ('Restaurant', RESEED, 1)
insert into Restaurant (RestaurantName, Lokacioni) 
values
	('Restaurant Marinari', 'Ulqin (plazha e vogel)'),
	('Restaurant Marinari', 'Ulqin (plazha e madhe)')
	
create table Team(
TeamId  int identity(1,1),
TeamName  varchar(100),
TeamSurname  varchar(100),
Position varchar(200)
)
DBCC CHECKIDENT ('Team', RESEED, 1)
insert into Team (TeamName, TeamSurname, Position) 
values
	('Emri', 'Mbiemri', 'Menagjer'),
	('Emri', 'Mbiemri', 'Kamarier'),
	('Emri', 'Mbiemri', 'Kuzhinier')

create table Useri(
UserId  int identity(1,1),
UserName  varchar(100),
Restaurant varchar(100),
FoodItem varchar(100),
Drinki varchar(100)
)
DBCC CHECKIDENT ('Useri', RESEED, 1)
insert into Useri (UserName, Restaurant, FoodItem, Drinki) values ('Emri', 'Restaurant Marinari', 'Levrek', 'Coca Cola') 
-----------------------------------------------------------------------------
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    PasswordHash NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    IsActive BIT DEFAULT 1
);

insert into Users (Username, PasswordHash, Email) values ('filani', 'filani123', 'filani123@gmail.com') 

create table Tradicional(
TradicionalId  int identity(1,1),
TradicionalName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('Tradicional', RESEED, 1)
insert into Tradicional (TradicionalName, Price) 
values 
	('Fli', 19.99),
	('Pite me patate', 12.99),
	('Pite me spinaq', 9.99),
	('Krelane', 5.99)

create table FastFood
(
FastFoodId  int identity(1,1),
FastFoodName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('FastFood', RESEED, 1)
insert into FastFood (FastFoodName, Price) 
values 
	('Hotdog', 0.99),
	('Cheeseburger', 3.50),
	('Hamburger', 2.50),
	('Tost', 0.99),
	('Sandwich', 0.99),
	('Burrito', 1.99),
	('Taco', 2.99),
	('French Fries', 1.99)

create table ChineseFoods
(
ChineseFoodsId  int identity(1,1),
ChineseFoodsName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('ChineseFoods', RESEED, 1)
insert into ChineseFoods (ChineseFoodsName, Price) 
values 
	('Kung Pao Chicken', 4.99),
	('Mapo Tofu', 2.99),
	('Chow Mein', 6.99),
	('Chinese Hot Pot', 1.99),
	('Sweet Pork', 7.99),
	('Peking Roast Duck', 14.99),
	('Wonton Soup', 1.99)

create table ItalianFoods
(
ItalianFoodsId  int identity(1,1),
ItalianFoodsName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('ItalianFoods', RESEED, 1)
insert into ItalianFoods (ItalianFoodsName, Price) 
values 
	('Neapolitan pizza', 7.99),
	('Margherita pizza', 5.99),
	('Spaghetti Carbonara', 2.99), 
	('lasagna', 1.99), 
	('Risotto', 1.99), 
	('Pasta', 1.99), 
	('Bruschetta', 3.99), 
	('Gnocchi', 4.99), 
	('Pesto alla Genovese', 5.99), 
	('Arancini', 3.99)

create table SeaFoods
(
SeaFoodsId  int identity(1,1),
SeaFoodsName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('SeaFoods', RESEED, 1)
insert into SeaFoods (SeaFoodsName, Price) 
values 
	('Salmon', 55.99), 
	('Levrek Europian', 24.99),
	('Levrek i Detit të Zi', 27.99), 
	('Tuna', 59.99), 
	('Harengë', 7.99),
	('Troftë', 5.99), 
	('Gaforre', 21.99), 
	('Karkaleca', 14.99), 
	('Kallamari', 19.99), 
	('Kërmij', 12.99), 
	('karavidhe', 37.99) 

create table Salads
(
SaladsId  int identity(1,1),
SaladsName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('Salads', RESEED, 1)
insert into Salads (SaladsName, Price) 
values 
	('Sallatë Greke', 0.99), 
	('Sallatë Deti', 2.50),
	('Sallatë Caesar', 2.99),
	('Sallatë e Gjelbërt', 0.99),
	('Sallatë Pule', 2.5),
	('Sallatë Arugula', 1.5),
	('Sallatë e Përzier', 2.99)

create table Desserts
(
DessertsId  int identity(1,1),
DessertsName  varchar(100),
Price decimal(4,2)
)
DBCC CHECKIDENT ('Desserts', RESEED, 1)
insert into Desserts (DessertsName, Price) 
values 
	('Italian Tiramisú', 5.99),
	('Brownie', 2.99),
	('Cupcake', 3.99),
	('Cheesecake', 1.99),
	('Vanilla Cake', 1.99),
	('Lemon Cake', 1.99),
	('Banana Cake', 1.99),
	('Pineapple Cake', 1.99)

create table Hof(
name varchar(100),
price decimal(4,2),
data datetime
)
DBCC CHECKIDENT ('Hof', RESEED, 1)
insert into Hof (name, price, data) values('Emri', 1.5, getdate()) 

Delete  from Hof
----------------------------------Drinks


create table Alcoholic
(
AlcoholicId  int identity(1,1),
AlcoholicName  varchar(100),
Price decimal(5,2)
)
DBCC CHECKIDENT ('Alcoholic', RESEED, 1)
insert into Alcoholic (AlcoholicName, Price) 
values 
	('Château Lafite Rothschild', 179.99), 
	('Domaine de la Romanée-Conti', 299.99), 
	('Giuseppe Quintarelli', 359.99), 
	('Masseto', 289.99),
	('Sierra Cantabria', 49.99), 
	('Chateau d Yquem', 89.99),
	('Josko Gravner ', 129.99),
	('Johnnie Walker', 39.50), 
	('Jack Daniels', 17.99), 
	('Bacardi', 39.99), 
	('Jagermeister', 19.99),
	('Absolut Vodka', 9.99), 
	('Smirnoff Vodka', 12.99),
	('Martini', 7.99), 
	('Pina Colada', 5.99),
	('Cosmopolitan', 7.99),
	('Margarita', 7.99),
	('Gin and Tonic', 5.99), 
	('Smirnoff Ice', 4.99),
	('Budweiser', 1.99),
	('Heineken', 2.99),
	('Corona', 1.99),
	('Birra Peja', 1.99)

create table NonAlcoholic
(
NonAlcoholicId  int identity(1,1),
NonAlcoholicName  varchar(100),
Price decimal(3,2)
)
DBCC CHECKIDENT ('NonAlcoholic', RESEED, 1)
insert into NonAlcoholic (NonAlcoholicName, Price) 
values 
	('Virgin bloody Mary', 2.99), 
	('Virgin piña colada', 3.99),
	('Lager', 0.99), 
	('Red BUll', 2.99), 
	('Golden Eagle', 0.99) 

create table Tea
(
TeaId  int identity(1,1),
TeaName  varchar(100),
Price decimal(3,2)
)
DBCC CHECKIDENT ('Tea', RESEED, 1)
insert into Tea (TeaName, Price)  
values 
	('Qaj i Gjelbërt', 0.85),
	('Qaj i Zi', 0.85),
	('Qaj Kamomil', 0.50),
	('Qaj Herbal', 0.75),
	('Qaj i Xhenxhefilit', 0.85),
	('Qaj Rusi', 0.50)

create table Coffee
(
CoffeeId  int identity(1,1),
CoffeeName  varchar(100),
Price decimal(3,2)
)

insert into Coffee (CoffeeName, Price) 
values 
	('Americano', 0.99), 
	('Cappucino ', 0.50), 
	('Latte', 0.50), 
	('Espresso', 0.50),
	('Mocha', 0.99),
	('Black Coffee', 0.79), 
	('Macchiato', 0.50),
	('Cortado', 1.20)

create table OtherD(
OtherDId  int identity(1,1),
OtherDName  varchar(100),
Price decimal(3,2)
)
DBCC CHECKIDENT ('Coffee', RESEED, 1)
insert into OtherD (OtherDName, Price) values ('nul', 0.50) 

create table Hod(
name varchar(100),
price decimal(3,2),
data datetime
)
DBCC CHECKIDENT ('Hod', RESEED, 1)
insert into Hod (name, price, data) values ('User', 1.50, getdate()) 

-----Porosia

create table Food(
FID int identity(1,1),
Kodi varchar(200),
ChineseFoods varchar(200),
ItalianFoods varchar(200),
Desserts varchar(200),
SeaFoods varchar(200),
FastFood varchar(200),
Tradicional varchar(200),
Salads varchar(200),
Other varchar(200),
TotalP decimal(5,2)
)
DBCC CHECKIDENT ('Food', RESEED, 1)
insert into Food (Kodi, ChineseFoods, ItalianFoods, Desserts, SeaFoods, FastFood, Tradicional, Salads, Other, TotalP) 
values ('nul','nul','nul','nul','nul','nul','nul','nul','nul', 250.00) 
select * from Food

                    delete from Food
                    where Kodi = 'table 1' 
                    

create table Drinks(
DID int identity(1,1),
Kodi varchar(200),
Alcoholic varchar(200),
NonAlcoholic varchar(200),
Tea varchar(200),
Coffee varchar(200),
OtherD varchar(200),
TotalP decimal(5,2)
)
DBCC CHECKIDENT ('Drinks', RESEED, 1)
insert into Drinks (Kodi, Alcoholic, NonAlcoholic, Tea, Coffee, OtherD, TotalP)
values ('nul','nul','nul','nul','nul','nul', 250.00) 
select * from Drinks



create table Tavolina(
TavolinaId int identity(1,1),
TavolinaName varchar(300)
)
DBCC CHECKIDENT ('Tavolina', RESEED, 1)
insert into Tavolina (TavolinaName) values ('Tavolina 1') 


-----MSG
create table Msg(
MsgId int identity (1,1),
Emri varchar (200),
MsgName varchar (8000)
)

insert into Msg (Emri, MsgName) values('tets','This tool rearranges the order of lines in the given textual data. It uses the Knuth method to do it,
aka the Fisher and Yates order permutation algorithm. The behavior of the algorithm changes based on how many lines are shuffled at
the same time. By default, it takes every single line in turn (1, 2, 3, …, n), generates a random number from 1 to n for it,
which is the new position, and moves the line to this new place. It can also take several lines at once and move them ') 

create table Kodi (
kodi varchar (200)
)
insert into Kodi (kodi) values ('T049A1V')
insert into Kodi (kodi) values ('T038A6V')
insert into Kodi (kodi) values ('T044A6V')



