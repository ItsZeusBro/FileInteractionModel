# File Interaction Sexy Transaction (FIST) 0.1 (in progress)

<img src="https://github.com/ItsZeusBro/FIST/blob/51690d944a8f7f6a344c556556c93f75479673a6/Docs/fists.gif" height=250 width=400/>

### The File Interaction Sexy Transaction Model is specified as a Turing Complete File Computer.

## Background Information
We care more about buffers than we do about files. A buffer is a partuclar string of content we wish to do something with. A file is everything else that we don't need (except for indexing the information we require). It stands to reason that physical files are becoming obsolete in some sense. When Ai discovers how to break up data into statistically used buffers (cache memory) as opposed to entire files, we become aware of this point even further. So operating on buffers with a virtual file model and syntax is more important long term, than reasononing about actual physical files and their locations.

#### FIST will be able to handle most (if not all) of your file system needs in 2 primary functions, 2 callback functions, and 1 constructor.
## Use Cases
1. File Buffer Logic
2. File Virtualization (we have reasons for needing and wanting this)
3. Stream Filters
4. Simplifying every possible transaction ever to do with moving data between files
5. World Domination

## We can begin with the 12 Main Concepts (plus 2):

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

The different forms of quantality: x%; xbin xb xmb xgb xtb xeb; 0.xx (floating point precision is an implementation detail); anchors like beg, mid, and end; operators that use an abstract number to help intervene in the processe of handling overflow semantics. 

<img src="https://github.com/ItsZeusBro/FIST/blob/5aa06c70d530ef91ad68d293d0af92e445d50b15/Docs/Quantalities.jpg" height=350 width=500/>


## Clus-ivity 
##### ivity are the properties of some clus relationship between file transactioins
Clusivity is evaluated fourth on a diagram. This operates on a buffer created by Positionality and Quantality.

Clusivity defines how much data flow is inclusive with the source after its flow is executed, or whether all or part of that flow of data is exclusively owned by the new owner. 

The dashed line represents exclusivity for the entirety of the flow. Meaning, the data that flows into the target will be entirely truncated when there is a dashed line. However, you can add restraints to this general behavior to refine the exclusivity based on the general case. 

Solid lines, on the other hand define an inclusive relationship by default between the source flow and the destination. That means all of the data that flows is shared.

This could represent a conflict between a destination file that excludes sharing flowed data and a destination file that includes sharing that same data.
In the case of a conflict, there needs to be a virual file system to resolve this conflict. At least and until this conflict is resolved. What happens when one file excludes a portion data (after its flow) before another file tries to incumber that data, is that the new transaction recieves a file that no longer has the data. If this were to happen in reverse, you have a forked file at the time of the second transaction which aims to exclude it.

Clusivity can take paramters like "all", "half", "50%", "5%", 0.25, 0.004, "n:m" (range), which only apply to the data that flows from source to destination. Once the flow is buffered, clusivity takes effect on the buffered data, which can help us virtualize files.

Clusivity is evaluated on a buffer that is created after (and from) the positionality and quantality. Positionality and Quantality provide a position and offset which produce "beg", "mid", and "end" anchors to denote ***how much of the outgoing buffer should be shared with the original source***. This is a colon separated triplet. The first element is the clusivity expressed as "in" or "ex" (inclusive or exclusive), the second is a "beg" or "mid" anchor primitive expression, the third is the offset relative to the second (in the triplet) in the way of another primitive expression using "beg", "mid", or "end" with some op (+*-/) that makes sense relative to the begining of the clusive buffer.

ACCEPTS: beg, end, mid, percentage strings, byte values, and arithmetic (+-*/) ops (but not compound expressions)
Examples: in:beg+10mb:end-100mb (must actually evaluate to some positive number of bytes, or it is useless and returns nothing)


<img src="https://github.com/ItsZeusBro/FIST/blob/79db3fc288540bf444f1a8a41e3fd5b24ce18563/Docs/Clusivity.jpg" height=350 width=500/>




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
                      (data)=>{
                              //post script here
                      }
                      
              ).stream( 
                      c,      //ionality
                      alityf,
                      tality,
                      alityt,
                      (data)=>{
                              //pre script here  
                      },
                      (data)=>{
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

