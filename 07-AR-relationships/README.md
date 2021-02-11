Active Record Relationships

## SWBATs
- [ ] Build on the knowledge of OO Ruby associations to use them in AR
- [ ] Draw a three-model ERD prior to coding
- [ ] Design domain model thoughtfully
- [ ] Remember that it is the joiner's responsibility to know about the other `id`'s
- [ ] Become comfortable with the syntax of the association macros (`belongs_to`, `has_many`, `has_many through`) 
- [ ] Understand that macros give us methods but the associations happen in the database

### Outline
- tables in SQLs are classes in Ruby -> AR does the translation, right? 
- naming conventions in Ruby
- AR just does the migration -> is it a place? or just the "action"?
- is AR automatically doing mass assignment? 
- relationship between ruby, rake, activerecord, sql
- Which rake tasks, or types of rake tasks, do we execute inside rake console(pry)?


* Review what we covered so far:
    - What is AR?
      - bridge between Ruby (whatever language) and sql
        - helps move data from Ruby to the database/SQL and reverse
      - design pattern
      - a type of ORM
      - takes instructions and translates it into action
        - code for building databases -> a gem
    - When to use SQL and when AR?
      - whenever you want!
      - SQL for more complex queries -> `.where` / `.where.not`, e.g. find all the users who are (a) active, (b) between the age of 18 and 60, (c) have a cat <- this is a different model, (d) they have had the cat for x years
        -> this can be written as one query OR
        -> it can be written as: User.find_by().map.map
      - sql -> "Structured Query Language"
    - What's the difference between a model and a table?
      - model/class -> Ruby uses models/classes, holding instance behavior
      - table -> database, a way to store data, provides us with schema to see the structure, SQL uses it
    - Can a database have many tables?
      - YES! As many as you **need**
    - What is meant by migration?
      - migration is a blueprint for ActiveRecord to create/change/delete SQL tables
      - what can I change that is not going to mess other things up (e.g. names of the files -> uppercase/lowercase and when)?
        - you can change any migration that is not up -> if your migration has been migrated (ran), then you need to first roll it back 
          - NEVER CHANGE YOUR SCHEMA 
          - NEVER CHANGE YOUR DEVELOPEMNT FILE
    - Naming conventions in Ruby and AR
      - model name:  SINGULAR (e.g. Plant, IceCream)
      - everything else (table names): PLURAL (e.g. Plants, IceCreams)
      - migration file names: descriptive
      - So when you create the migration with the migration command the name is plural 
    - Easier to rollback vs delete/destroy, bc delete/destroy will delete the seed data?
      - rollback -> change something in how the table looks (e.g. name of the column)
      - deleting/destroying -> an instance 
    - What is `rake`?
      - task manager
      - toolbox
      - ar functionality that allows you to automate your tasks
    - What is `rake console`?
      - super-pry: all the functionality of binding.pry + access to the database
    - Difference between `.new` and `.create`
      - `.new` -> creates a Ruby instance
      - `.create` -> creates a Ruby instance AND saves it to the database
    - what is a column?!?!?!?!
      - columns are attributes
      - rows are instances
    - database -> collection of all the tables
  - how are images migrated:  
    - save a url to the database
    - OR: ActiveStorage

### Setting up relationships

This is our domain model:

```
Plant —————< PlantParenthood >————————— Parent
:name       :affection (int)         :name
:color                               :free_time
:bought(datetime)                    :age
:fussy(bool)
```

- How can we associate a Parent with a Plant and vice-versa?

Let's first create the association between Parent and PlantParenthood. **Since It's the PlantParenthood that has the chicken feet on itself, this is the model that should contain the instance ides of others.**

```ruby
class Plants < ActiveRecord::Base
  def plant_parenthoods
    # PlantParenthood.all.select{|pp| pp.plant_id == self.id}    
    # OR use AR .find
    PlantParenthood.where(plant_id: self.id)  
  end

  def parents
    parent_ids = plant_parenthoods.map{|plant_parenthood| plant_parenthood.parent_id}
    parent_ids.map{|id| Parent.find(id)}
  end

end
#...
class Parent < ActiveRecord::Base
  def plant_parenthoods
    # PlantParenthood.all.select{|pp| pp.parent_id == self.id}
    # OR use AR .where
    PlantParenthood.where(parent_id: self.id)
  end


  def plants
    plant_ids = plant_parenthoods.map{|plant_parenthood| plant_parenthood.plant_id}
    plant_ids.map{|id| Plant.find(id)}
  end
end
```

## What About a Better Way™️

- ActiveRecord Macros
  - PlantParenthood model: `belongs_to :plant`, `belongs_to :parent`
  - Plant model `has_many :plant_parenthoods`
  - Parent model `has_many :parents`
- These macros provide **even more** methods, like `plant_instance.parents` and `parent_instance.plants`
  - **Major Key🔑**––since a `plant_parenthood` instance BELONGS TO a `parent` it should have ONE Parent. Therefore the method is `.parent`. A parent HAS MANY `plant_parenthoods`, therefore the method is `.plant_parenthoods` pay attention to what is singular and what is plural.

### Important Methods from ActiveRecord

- `Model.new`
  - creates a new **RUBY** instance in local memory without persisting to the database
- `Model#save`
  - inserts or updates a **RUBY** instance to the db
- `Model.create`
  - `Model.new` + `Model#save`
  - A class method that creates a new **RUBY** instance AND saves it to the database
- `Model.all`
  - returns all instances (we wrote this by hand a million times)
- `Model.first`
  - instance with the lowest ID in the db
- `Model.find`
  - Finds a record by id and returns a Ruby instance––`Plant.find(1)` returns the plant with an id of 1
- `Model.find_by({ attribute: value })`
  - can find by one attribute-value pair or multiple
  - `Plant.find_by(name: 'Angel's prayer')` will return the plant with a name of 'Angel's prayer'

[Active Record Docs](http://edgeguides.rubyonrails.org/active_record_migrations.html#using-the-up-down-methods)


## ERD to finish with

```
Category :name
    |
    ^
  Plant ----< PlantParenthood >---- PlantParent
   :species      :plant_id            :name
   :color        :plant_parent_id     :responsible
   :bought       :affection           :age
   :fussy
   :category_id
```

## RECIPE FOR DEALING WITH A NEW LAB
- draw your erd and decide on the attributes
- create migrations 
- run migrations + check schema
- create models
- add association macros
- create seed data and run it