

https://switch2osm.org/using-tiles/getting-started-with-leaflet/

https://github.com/henrythasler/Leaflet.Geodesic

```

# Build
docker build -t harbor.datasvc01.lysdemolab.fr/jear/cloud3-dsp:v1.36 .
docker push harbor.datasvc01.lysdemolab.fr/jear/cloud3-dsp:v1.36
docker push harbor.datasvc01.lysdemolab.fr/jear/cloud3-dsp:latest

# Deploy
k apply -f deploy/03_deployment.yaml -n hpe-dps --validate=false


```
