cd apps/svgtofont
ROOT='../..'
iconName='dg'
fontExt=('.eot' '.svg' '.ttf' '.woff' '.woff2')
appName='dunggramer-next'
output='fonts'

# Clean up folder if exist
rm -rf "${ROOT}/libs/icons}"

# Move the folder to the root_dir and subfolder libs and rename to icons
mv "./font/react/" "./font/icons/" && mv "./font/icons" "${ROOT}/libs"


# Copy font file to apps/dunggramer-next folder
for ext in "${fontExt[@]}"
do
  cp "./font/${iconName}${ext}" "${ROOT}/apps/${appName}/public/${output}"
done

# Copy scss file to apps/dunggramer-next folder
mkdir -p "${ROOT}/apps/${appName}/styles/font-icons"
cp "./font/${iconName}.scss" "${ROOT}/apps/${appName}/styles/font-icons"

# @import 'font-icons/dg' in apps/dunggramer-next/styles/main.scss
echo -e "\n@import 'font-icons/${iconName}';" >> "${ROOT}/apps/${appName}/styles/main.scss"

# Remove 1 to 8th line in apps/dunggramer-next/styles/font-icons/dg.scss
sed -i '1,8d' "${ROOT}/apps/${appName}/styles/font-icons/${iconName}.scss"

# Add 8th line to head of apps/dunggramer-next/styles/font-icons/dg.scss
hash='t=1678016823524'
{
  echo -e "@font-face {font-family: \"${iconName}\";"
  echo -e "  src: url('/${output}/${iconName}.eot?${hash}'); /* IE9*/"
  echo -e "  src: url('/${output}/${iconName}.eot?${hash}#iefix') format('embedded-opentype'), /* IE6-IE8 */"
  echo -e "  url('/${output}/${iconName}.woff2?${hash}') format('woff2'), /* chrome firefox */"
  echo -e "  url('/${output}/${iconName}.woff?${hash}') format('woff'), /* chrome firefox */"
  echo -e "  url('/${output}/${iconName}.ttf?${hash}') format('truetype'), /* chrome firefox opera Safari, Android, iOS 4.2+*/"
  echo -e "  url('/${output}/${iconName}.svg?${hash}#${iconName}') format('svg'); /* iOS 4.1- */"
  echo -e "}"
} >> "${ROOT}/apps/${appName}/styles/font-icons/${iconName}.scss"

