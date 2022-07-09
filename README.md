# File Interaction Sexy Transaction (FIST)


### File Interaction Sexy Transaction 0.1 (in progress) is specified as a Turing Complete File Computer.

<img src="https://github.com/ItsZeusBro/FIST/blob/51690d944a8f7f6a344c556556c93f75479673a6/Docs/fists.gif" height=200 width=250/>
(https://commons.wikimedia.org/wiki/File:Fist_bump_animated_illustration.gif)

## Background Information
We care more about buffers than we do about files. A buffer is a partuclar string of content we wish to do something with. A file is everything else that we don't need (except for indexing the information we require). It stands to reason that physical files are becoming obsolete in some sense. When Ai discovers how to break up data into statistically used buffers (cache memory) as opposed to entire files, we become aware of this point even further. So operating on buffers with a virtual file model and syntax is more important long term, than reasononing about actual physical files and their locations.

#### FIST will be able to handle most (if not all) of your file system needs in 2 primary functions, 2 callback functions, and 1 constructor.
Most importantly, FIST's longterm vision is that the computed flow of data and not where its located on a physical system, is more important. A file computer abstraction is therefore in order, to simplify data motion and granular transactions.

### Notes to Reader:
FIST is not yet a robust specification. These are general abstract concepts that will make their way into the actual specs. I intend this to be a mere reference implementation that helps me find the issues and formulate the actual specification. Please help with the implementation to learn more about the future of FIST. (right now there is next to nothing in the way of features, i'm still working on santitzation of input (a lot of weird edge cases). I'm not working on the semantics too much in the begining because those can impact the project a great deal, while we have very little in the way of understanding at such an early stage. This is a discovery process, and until we are confident we will treat it that way. Some people may want algebraic expressions that represent some dynamic stream model where the buffer size and specific properties of the data will evaluate to a different flow output, but for now we will target that for 2 or 3.0.

## Use Cases
1. File Buffer Logic
2. File Virtualization (we have reasons for needing and wanting this)
3. Stream Filters
4. Simplifying every possible transaction ever to do with moving data between files
5. Backbone Infrastructure
6. UDP stuff?
7. Big Unstructured Data (like spam and nlp data)
8. Virtual Web Files and Search Engine Optimization
9. World Domination

## We can begin with the 14 main concepts:

1. Files
2. Directionality
3. Quantality
4. Clusivity
5. Positionality
6. Conditionals (and Mitigation)
7. Looping
8. Pre-actions
9. Post-actions
10. Syncronicity
11. Chaining
12. Flow
13. Stream
14. Virtual IO

## Files
These are files.
<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/55cc01abec31d82a72601e547ae22120a9e773b8/Docs/File.png" height=350 width=500/>

## Direct-ionality
Directionality is evaluated first on a diagram. Directionality simply means what direction belongs to the flow of data. It is represented by an arrow. This is the most simple idea in the specification and cannot be mistaken because its abstractual. The only things that matter here is the fact that its an arrow. This is because all arrows have a direction, and its direction determines the flow of data. If you have a bidirectional arrow without constraints, it represents a mirror where one of the files mirrors the data of the other (from left to right).

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/9a2d4b37b6a05a4f9afdd46c91150b695839755e/Docs/Directionality.jpg" height=350 width=500/>

## Position-ality
Positionality is evaluated second on a diagram. This uses the begining and end bytes of the file for the evaluation of a singleton. There are two positionality's in a file transaction. From what byte position the data originates, and to what byte position the data flows. Therefore there are two positionality's that must be specified in the api call. We call them "alityf" and "alityt" (representing "ality from" and "ality to").

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/a1e934f8cf644f4423608af5b67b903426952137/Docs/Positionality.png" height=350 width=500/>


## Quan-tality 
##### tality is a thing around here
Quantality is evaluated third on a diagram. It operates on a buffer set by alityf (which is the EOF (end of file) of the source file minus the alityf value). It represents the quantity of bytes from the alityf position that are able to be sent over the flow channel. It just operates on the first buffer. Thats all. And it determines the quantity of data that is capable of flowing out of the file. This first buffer is virtual in a sense because when you create a postion to flow from, there are actual restraints on the file, being its size that you cannot work around. 

Quantality can be represented by an abstract number like 1mb or 1gb. It is concrete in a sense, but what happens when you don't have 1mb or 1gb? So its abstract in that there are specific rules associated with how it is evaluated in different situations that would otherwise not make sense in concrete reality.

<img src="https://github.com/ItsZeusBro/FIST/blob/5aa06c70d530ef91ad68d293d0af92e445d50b15/Docs/Quantalities.jpg" height=350 width=500/>


## Clus-ivity 
##### ivity are the properties of some clus relationship between file transactioins
Clusivity is evaluated fourth on a diagram. This operates on a concrete buffer (or virtual buffer)  created by Positionality and Quantality. It is concrete in case it is a flow transaction. It is virtual in case it is a stream transaction.

Clusivity defines how much data flow is inclusive with the source after its flow is executed, or whether all or part of that flow of data is exclusively owned by the new owner. 

The dashed line represents exclusivity for the entirety of the flow. Meaning, the data that flows into the target will be entirely truncated when there is a dashed line. However, you can add restraints to this general behavior to refine the exclusivity based on the general case. 

Solid lines, on the other hand define an inclusive relationship by default between the source flow and the destination. That means all of the data that flows is shared.


<img src="https://github.com/ItsZeusBro/FIST/blob/163b51b276f8957daf8a05e1bdf8ffb569b2aa7e/Docs/Clusivities.jpg" height=350 width=500/>




## Conditionals and Mitigation

Conditionals are basically IF ELSE blocks with boolean statements on the output of the previous statement or statement block. They require a statement or statement block in order to be executable.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/ebe3e781f31dd6331f1ed2725c64e985e666ed6d/Docs/Conditionals.jpg" height=350 width=500/>

Mitigation specifies what happens to an interaction when the initial interaction tried, but failed for some reason.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/733daec245cf3d680554b4c31820bcf90be8f590/Docs/Mitigation.jpg" height=350 width=500/>


## Looping

This is an iterator that runs a statement or statement block until the boolean conditional statement is no longer valid. You can also mitigate the effect of an entire loop, because they are hard to reason about when it comes to files.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/ecee5bbb1793eeb4ca01dc41acf9b59aaceb2a11/Docs/Looping.jpg" height=350 width=500/>


## Pre-Actions
These are actions you specify that are to take place on the data before it is inserted into the file at its given position. These are just functions you pass in.

## Post-Actions
These are actions you specify that are to take place on the file (as a whole) after data is inserted into it at some position


## Syncronicity
If you have a bidriectional flow model, you can use the bidirectional arrow or a second arrow. A bidirectional arrow is evaluated (syncronously) left to right. A second arrow is evaluated top down (syncronously). A biderectional arrow restricts you to the same constraints going in both directions, but left to right flow is evaluated on B first. Then the same constraints are applied in reverse after the first constraints are finished.

## Chaining, Forks, and Junctions
These are for graph models. Which are separate from Standard Flow Models. They look similar to Finite State Machine models in The UML.

Chaining is a modeling technique that demonstrates a compound flow model, where you have a starting node, and flow the data to other nodes syncronously or asyncronously, effectively piping the flow into another node or multiple nodes. Forks are when a file flow syncronously splits into two different asyncronous paths. Two asyncronous paths of execution can only converge on a Junction. They need to terminate on the junction that executes the end result of the flow of a fork. The junction can merge file results in a number of syncronous ways.

## Flow
A Flow in this context is a terminating execution that runs on a File Interaction. It runs left to right, and top down. Like the english language.

<img src="https://github.com/ItsZeusBro/FileInteractionModel/blob/9a2d4b37b6a05a4f9afdd46c91150b695839755e/Docs/Flow.jpg" height=350 width=500/>


## Stream
A Stream in this context is a non-terminating execution (watcher) that runs on a File Interaction. Streams can be chained together with pre and post scripts.

<img src="https://github.com/ItsZeusBro/FIST/blob/167db7350762cfd9486e9d3f73665b7f198e160c/Docs/Streams.png" height=350 width=500/>


## Virtual IO
This is necessary for some of the features of this specification. Temporary files are created to implement some of these features. Every file you reference with the api has a virtual reference under the hood, and the result goes to the hard reference afterwards. So interacting with the files using another api before a job is complete is meaningless because it gets overwritten when File Interaction Execution finishes. For example if you ran a loop on your file interactions, and you had a catch statement if it didn't finish for some reason (finish means something specific here), then it would not affect your actual files until after the catch statement completes without errors.

  
# Glossary in brief:
## File Interactions
#### Quantality
This is a special word we use for describing the abstract quantity context and rules associated with some concrete attempt to move a specific number of bits.

#### Positionality
This is a special word we use for describing the abstract position context and rules associated with some concrete attempt to move bits from a potential position in a file.


#### Clusivity
This is a special word we use for describing the abstract clusive context and rules associated with some concrete attempt to describe the orientation of data ownership after the flow of data has occured.

## Sexy Transactions

#### Flow
This is a complex one time transaction between files, that is described by the Quantality, Positionality, and Clusivity of the flow.

#### Script
This is an arbitrary script the user can run on a chunk of data during transactions

#### Stream
This is a complex stream transaction between files, that is described by the Quantality, Positionality, and Clusivity of the stream.


## Shorthands
#### tality
Short hand for quantality. Usually is something that initializes a Quan class, like this: Quan(tality). Tality here is a valid object describing a Quantity of data that we are flowing or streaming to some file.

#### ality
Short hand for Positionality. Usually is something that initializes a Position class, like this: Position(ality). Ality in this case is a valid object describing a Position from which we read from or write to.

#### ivity
Short hand for Clusivity. Usually is something that initializes a Clus class, like this: Clus(ivity). Ivity in this case is a valid object describing the Clusive orientation of the File Interaction. (sharing properties like "inclusive" or "exclusive")

#### alityf
This is the "ality from" position associated with the source file and bit position from which data flows or streams.

#### alityt
This is the "ality to" position associated with the destination file and bit position to which data flows or streams.

## Longhands
#### sPosaQuanaClus
This is a string that could be a Positionality, Quantality, or Clusivity, in cases where a general class handles all three for general tasks.

## Corruptions

#### Sanatiz
This is a corruption of the english word "Sanatizer". We like Sanatiz better. 

#### Sclusatiz
Sclusatiz is the Sanatiz'r of a would be Clusivity string

#### Squanatiz
Squanatiz is the Sanatiz'r of a would be Quantality string

#### Sposatiz
Sposatiz is the Sanatiz'r of a would be Positonality string


## Analogies
#### Model
This represents all the code in Source that has to do with low level file operations.

#### View
This represents all the code having to do with validating input from the user functions, and returning output to the user. Validated input is to be consumed by the Controller functions.

#### Controller
This represents the business logic middleware between the Model and View.

## Bug Classes
#### June Bug 
A type of bug that should only exist in limited contexts

#### No-See-Ums
A type of bug we don't often see, but we know still exists

#### Water Bugs 
A memory leak bug

#### Praying Mantis
Bugs we only see at scale

## Miscilaneous
#### Comet
This is a tool i'm working on to create a better debugging experience, and logs for Ai optimization and debugging. 

#### Goody Bag
This is an unordered bag of miscellaneous tools

#### Magic Spells
These are regex strings that are so long and well known, we call them Magic Spells



## An Api (still working on it, thanks)
a, b, and c are files. a.flow(b, //whatever) returns b so that you can do something on it. b.stream(c, //whatever) does the same
              
              a.flow( 
                      b,      //ionality
                      alityf,
                      tality, 
                      ivity, 
                      alityt,
                      (data)=>{
                              //pre script here  
                      },
                      (fd, data)=>{
                              //post script here
                      }
                      
              ).stream( 
                      c,      //ionality
                      alityf,
                      tality,
                      ivity,
                      alityt,
                      (data)=>{
                              //pre script here  
                      },
                      (fd, data)=>{
                              //post script here
                      }
              )
              
# Legend:
  - ***a*** is a Fist file object or file string
  - ***b*** is a Fist file object or file string
  - ***c*** is a Fist file object or file string
  - ***alityf*** corresponds to "positionality from" (meaning the position from which data is pulled from the source file)
  - ***tality*** corresponds to a quantality value type
  - ***ivity*** corresponds to a clusivity value type
  - ***alityt*** corresponds to "positionality to" (this always represents the position in the file we are writing to
