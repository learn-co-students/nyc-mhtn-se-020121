# Shower

This lab is a behavior-driven lab. Meaning, there are no tests and you need to test it yourself.
There is a [solution branch](https://github.com/learn-co-students/nyc-mhtn-se-020121/tree/solution) and a [video walkthrough](https://youtu.be/uK6WT1qsCqA) available to you but use them only if you feel really stuck or after you've finished a deliverable.

1. Write a Person class.
2. The person should be instantiated with these attributes: `last_hunger_level_change`, `name`, `hunger_level`, `hunger_time`. 
    - When creating a new person, we should provide only an argument of a name and we **could** provide an argument of a hunger_time but not necessarily;
    - `hunger_time` should default to 0.01 unless the user passed another value; this value will stand for how how fast a person gets hungry (in sec)
    - `last_hunger_level_change` - current time (find a Ruby method that provides that); this value will record when was the last time a person got hungry
    - `hunger_level` - 5.0; this value stands for the initial hunger level
    - write `attr_` macros for each of the attributes; follow your own judgement but also keep in mind that: 
        - `name` will remain unchanged in this class but we will want to read it;
        - Test if you can create a person and if this person can be instantiated with/out the argument of `hunger_time` (hint: create two instances). Test if you can call `shower` method on a person.
        - Test if you can read all the attributes you are supposed to read and change all the attributes you are supposed to change; check if it errors out when you do the opposite;
3. Add an instance behavior `Person#shower`. Its body can be empty, return whatever you want or just puts something. We will get back to this method later on.
4. Add a class variable of "bubbles". The variable should hold a value of a string: "bubbles everywhere".
5. Add a class variable called "all" that holds an empty array.
6. Add a class behavior `Person.all`, which returns all the Person instances we have created. Remember to make sure that every new instance created is pushed into the `@@all` array.
    - Test whether you are getting an array of all instances when you call `Person.all`.
7. 💯 Add a class method that returns an array of names of the instances called `Person.names_only`
8. 💯  Test whether you are getting an array of all names of all the instances when you call `Person.names_only`.

WOW YOU JUST DID SO MUCH WORK! 

TIME FOR A JOKE -- watch [the separate joke video](https://youtu.be/ijWamWxpS7U).