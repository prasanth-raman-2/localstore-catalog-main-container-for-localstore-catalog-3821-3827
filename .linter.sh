#!/bin/bash
cd /home/kavia/workspace/localstore-catalog-main-container-for-localstore-catalog-3821-3827/core_component_for_localstore_catalog
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

