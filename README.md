Agglo
=====

This is a fun and ongoing project to learn [paper.js](http://paperjs.org/ "paper.js") and simple 2D game mechanics.

Originally this game was built with Processing as a school assignment many years ago and can be viewed [here](http://www.openprocessing.org/sketch/32751 "Open Processing")(JavaPlugin req.).

This is my attempt to rebuild the game using new techniques, make it more efficient, and add new modes and abilities. Please feel free to contribute.

Contribute
----------
If you would like to contribute, please create an issue before making a pull request.

Classes
-------
Right now there are 3 Classes.
- Bullets - act as the enemy.
- Expanders - produced by user mouseEvents and cannot come into contact with bullets.
- Balls - Expanders that have been grown and dropped. Respond to gravity and collisions with all other classes.

TO-DO's
-------
_General_
- make a common class for Bullets, Expanders and Balls to share positions
- look into AABB hit testing for more efficient collisions (check within bounds)
- make quadtree for more efficient collision detection
- turn Bullets and Balls into Paper.Symbols and Paper.Groups of symbols
- make speed, gravity, scale and size dependent on current canvas size
- incorporate stats.js for fps details

_Bullets_
- on collision with balls transfer momentum and calculate angle more realistically

_Expanders_
- create a 'pop' animation on bullet collision and destroy expander instance
- Expanders collide with dropped Balls and reduce or expand accordingly. (much like hitting the view boundary)
- if Expander.bounds is outside the view.bounds when dropped then adjust it's position to be inside

_Balls_
- give balls gravity and mass
