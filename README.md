## ( Transforming people ) Because we don't have to manage IT infrastrure anymore, we can learn new stuff.
## Here : devops peering with new colleagues to build, run, patch   TypeScript / React websites 

TypeScript: JavaScript With Syntax For Types.

Measure consortium member's DC inter-distancewhich has to be greater than 200kms

### https://switch2osm.org/using-tiles/getting-started-with-leaflet/
### https://github.com/henrythasler/Leaflet.Geodesic
### https://react-leaflet.js.org/

```
# npm
npm install
npm run dev
npm run build

# Docker Build
APP_VERSION=v1.36
docker build -t harbor.datasvc01.lysdemolab.fr/jear/cloud3-dsp:$APP_VERSION .
docker push harbor.datasvc01.lysdemolab.fr/jear/cloud3-dsp:$APP_VERSION

# Deploy
k apply -f deploy/03_deployment.yaml -n hpe-dps --validate=false


```
