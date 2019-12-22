---
title: Using jq for mapping json to csv
date: "2019-12-21T00:00:00.121Z"
description: On how you can use JQ to coerce json data into something you can actually use
---

Once in a while, when working with vendors, I might need to make some
comparisons between what different vendors/ partners offer. Because
documentation can sometimes be incomplete or not completely up to date, I find
myself often turning to the vendor's API for answers, since even a handful of
sandbox API endpoints can often give you most, if not all, the answers.

Let's dive into an example. 
## Context:
I really, really, really like flaky pastries. I don't know why, but I'm not
satisfied until the entire table is covered in flakes. We could dig further into this strange flex, but it's pretty irrelevant. Anyway, to maximize my chances of indulging in this preference, I want to know what types of pastries are offered by 3 bakeries that are located closest to my house. Instead of walking over and asking like a normal human being, I decide to find the answer through more devious ways: hitting their baker.... API. ....this problem statement is already falling apart.

Anyway, let's say I curl baker_1's GET /pastries endpoint, and get the following
result:

```
{
    "data": [
         // irrelevant stuff
        "pastries": [
            "name": "French Croissant",
            "flake_factor": 10
        ], 
        "bakery_location": {
            "longitude": 6.11499,
            "latitude": 50.76891
        }, 
         // moar irrelevant stuff
    ]
}
```

Ideally, if I am making a comparison of multiple bakeries and their pastries,
I might want to share that with my fellow pastry-philes (yes, that's
a word). Since spreadsheets are cool and all, I want to do that in a CSV file. 

This leads me to 2 problems:
- I need to get this JSON data in a CSV format
- I need to be able to repeat this process with minimal effort.

This is where [`jq`](https://stedolan.github.io/jq/) comes into play.
A *"lightweight and flexible command-line JSON processor"*, it basically lets
you slice and dice up JSON data however you want, with the same ease that `grep`
lets you do it on the command line for regular text.

Now that we have our JSON response stored locally somewhere, let's apply `jq` to
it. 

Since all I care about for these bakeries is their pastries and their flake-factor, most of the top-level data is irrelevant to me. I need to dig into the `pastries` array. I can do that with the following command:

```
jq -r '.data[] | {"type": .pastries[].name, "flake": .pastries[].flake_factor}'
bakery.json > baker_filtered.json
```
The above command will take the entries from the `data` array (`.data[]`) and pass it
further down the filter. There, I can construct a new JSON object with whatever
keys I want (in this case, my standardized pastry ratings), and have the values
be the desired output from the original JSON object (in this case, entries from
the `pastries` array). I then pass this into a new `baker_filtered` json file. 

You can do some very powerful things with these commands. I have mostly used it
to filter out stuff from JSON responses that I don't care about, but as you can
see in this case, I created a brand new JSON object with it.

For more tutorials and the full manual, check out [jq's home
page](https://stedolan.github.io/jq/)

I did say I wanted the final output to be CSV. That can be done with a very
quick Python script:

```
import json
import csv


with open('baker_filtered.json') as json_file:
    data = json.load(json_file)

with open('flaky_pastry_list.csv', 'w') as write_file:
    writer = csv.writer(write_file)
    for row in data:
        writer.writerows(data)

write_file.close()
```

And there you have it. I might put together a more real-world example with some
actual useful data instead of this contrived example, but I hope this can
illustrate some of the cool stuff `jq` will let you do. 


