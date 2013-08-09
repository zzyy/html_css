function ClassA(name){
	this.name=name;
}
ClassA.prototype.getName=function(){
	return this.name;
}

function ClassB(name, age){
//	this.newMethod=ClassA;
//	this.newMethod(name);
//	delete this.newMethod;
	ClassA.call(this,name);
	
	this.age=age;
}
ClassB.prototype=new ClassA();
ClassB.prototype.constructor=ClassB;
ClassB.prototype.getAge=function(){
	return this.age;
}