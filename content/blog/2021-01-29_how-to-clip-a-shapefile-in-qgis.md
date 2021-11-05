---
title: How to Clip a Shapefile in QGIS
date: '2021-01-30'
summary: With QGIS, it's possible to clip away parts of a shapefile. Here's how to do it!
---

[QGIS](https://www.qgis.org/en/site/) is a wonderful, free, open source GIS tool that I like to use to make map visualizations. Recently I needed to clip away parts of a shapefile so it would layer nicely over a tileset that only showed features north of 45°N. Here I show one way to accomplish this in QGIS.

## Get a shapefile
First, you need a shapefile. [Natural Earth](https://www.naturalearthdata.com) is a great resource for free, public domain map datasets. For this example, I'll use the [Natural Earth 1:50 cultural countries vector files](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/cultural/ne_50m_admin_0_countries.zip).

Unzip the downloaded file, and then add the shapefile (ne_50m_admin_0_countries.shp) to a QGIS project with **Layer > Add Layer > Add Vector Layer**.

You should see a map like this (colors may vary):

<img src="images/2021/01/map.png" class="w-full m-t-b-lg" alt="A screenshot of QGIS that shows a map of the world in an EPSG:4326 projection."/>

To clip away everything south of 45°N, we can create a layer that will act as a selection for what to keep. Then we'll tell QGIS to do the clipping!

## Create a selection layer
To create the selection layer, go to **Layer > Create Layer > New Shapefile Layer**. Choose a location to store the selection layer. Choose "Polygon" as the geometry type.

To make it easier to place our shape, let's turn on a grid. Go to **View > Decorations > Grid**. Enable the grid, then set intervals of 180 x and 45 y.

Now we can make the selection shape. With the selection layer selected in the layers panel, toggle on editing by going to **Layer > Toggle Editing**. To add the shape, go to **Edit > Add Polygon Feature**, then click at approximately -180,90; 180,90; 180,45; and -180,45. Right-click to close the polygon. You don't need to be totally accurate because we can specify the exact values. To do this, go to **Edit > Vertex Tool (All Layers)**, then right-click on the selection shape. The Vertex Editor panel will appear at the bottom left. Adjust the vertex values so they're rounded to the whole numbers specified above. You should now have a rectangular selection shape.

<img src="images/2021/01/selection.png" class="w-full m-t-b-lg" alt="A screenshot of QGIS that shows a rectangular shape on top of a map of the world in an EPSG:4326 projection."/>

## Clip away part of the map shapefile
We're now ready to clip away the parts of the map shapefile that we don't need. Go to **Vector > Geoprocessing Tools > Clip**. Choose the map layer for the input layer and choose the selection layer for the overlay layer. Run the process. You'll now have a temporary layer called "Clipped." Hide the other layers in the layer panel to see that it only shows parts of the map north of 45°N. We no longer need the grid, so hide it by going to **View > Decorations > Grid** and disabling **Enable Grid**.

<img src="images/2021/01/clipped.png" class="w-full m-t-b-lg" alt="A screenshot of QGIS that shows a map of the world in an EPSG:4326 projection that has been clipped north of 45°N."/>

If you open the attribute table for the clipped layer (**Layer > Attribute Table**), you'll see that it only includes data for the parts of the shapefile that remain.

## Densify shapes so they appear curved in different projections
If the projection you intend to use has straight latitude lines, you're all set, but if those lines are curved, there's more to do!

Let's try a polar projection that shows meridians as straight and parallels as curved. Click on the CRS button in the lower right of the screen (it should say something like "EPSG:4326"). Search for EPSG:3574 and apply it. Our map is looking pretty low poly at the outer edges.

<img src="images/2021/01/low-poly.png" class="w-full m-t-b-lg" alt="A screenshot of QGIS that shows a map of countries north of 45°N in an EPSG:3574 projection. The outer edges of the map are straight, rather than curved."/>

To fix things, we need to add more vertices so shapes can appear to curve. Go to **Vector > Geometry Tools > Densify by Count**. Add about 6 vertices and run the process. We now have a temporary layer called "Densified" that looks curved around the edges.

<img src="images/2021/01/complete.png" class="w-full m-t-b-lg" alt="A screenshot of QGIS that shows a map of countries north of 45°N in an EPSG:3574 projection. The outer edges of the map are curved."/>

The downside to densification is that all of those vertices come at a cost. A densified shapefile is larger than a non-densified shapefile. That's fine for printed maps, but it may cause problems for digital maps.

At this point, we're all done! Now that you have a clipped map, you can export it as needed. For example, you can right-click on the densified layer, go to **Export > Save Features As**, and save it as a shapefile.
