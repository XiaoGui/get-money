#pragma strict

var prefab:GameObject;
var prefab2:GameObject;
var prefab3:GameObject;
var amount:int=10; 
var stop:boolean=false;

function Start () {
	//x=-20, -12, -4, 4, 12, 20
	//y=16
	var x=[-17, -13, -7, -1, 5, 11, 17];
	//var z=[-25, -20, -15, 15, 20, 25];
	
	for(var i=0;i<amount;i++){
		//Instantiate(prefab,Vector2.zero.Quaternion.identity);
		if(stop==false){
		
			var r=Quaternion.identity;
			r.eulerAngles=new Vector3(0,0,Random.Range(-25,25));
		
			var obj:GameObject=Instantiate(prefab,new Vector2(Random.Range(-18, 18),16),r);
			obj.name="ET";
		
			yield WaitForSeconds(0.5);
		
			var obj2:GameObject=Instantiate(prefab2,new Vector2(x[Random.Range(0, x.Length)],16),r);
			obj2.name="Bad ET";
		
			yield WaitForSeconds(0.5);
		
			var obj3:GameObject=Instantiate(prefab3,new Vector2(Random.Range(-18, 18),16),r);
			obj3.name="ET 1";
		
			yield WaitForSeconds(1);
		
		}
	}
}