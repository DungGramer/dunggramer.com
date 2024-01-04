# cd apps/svgtofont
ROOT='../..'
LIB_ICONS_PATH="${ROOT}/libs/icons"
iconName='dg'
fontExt=('.eot' '.svg' '.ttf' '.woff' '.woff2')
appName='dunggramer'
output='fonts'

# Clean up folder if exist
rm -rf "${LIB_ICONS_PATH}/src/lib/"

# Move the folder to the root_dir and subfolder libs and rename to icons
mv "./font/react/" "./font/lib/" && mv "./font/lib" "${LIB_ICONS_PATH}/src"

# Set version
PACKAGE_JSON_PATH="./package.json"

# Extract the current version
CURRENT_VERSION=$(grep -oP '"version": "\K(.*?)(?=")' $PACKAGE_JSON_PATH)

# Check if current version was found
if [ -z "$CURRENT_VERSION" ]; then
    echo "Current version not found in package.json"
    exit 1
fi

# Display current version
echo "Current version is $CURRENT_VERSION"

# Update to new version
LIB_ICONS_PACKAGE="${LIB_ICONS_PATH}/package.json"
sed "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$CURRENT_VERSION\"/" "$LIB_ICONS_PACKAGE" > temp.json && mv temp.json "$LIB_ICONS_PACKAGE"

# Confirmation
echo "Version updated to $CURRENT_VERSION in package.json."


# Copy font file to apps/dunggramer folder
# for ext in "${fontExt[@]}"
# do
#   cp "./font/${iconName}${ext}" "${ROOT}/apps/${appName}/public/${output}"
# done

# Copy scss file to apps/dunggramer folder
# mkdir -p "${ROOT}/apps/${appName}/styles/font-icons"
# cp "./font/${iconName}.scss" "${ROOT}/apps/${appName}/styles/font-icons"

# @import 'font-icons/dg' in apps/dunggramer/styles/main.scss
# echo -e "\n@import 'font-icons/${iconName}';" >> "${ROOT}/apps/${appName}/styles/main.scss"

# Remove 1 to 8th line in apps/dunggramer/styles/font-icons/dg.scss
# sed -i '1,8d' "${ROOT}/apps/${appName}/styles/font-icons/${iconName}.scss"

# Add 8th line to head of apps/dunggramer/styles/font-icons/dg.scss
# Random hash 13 number for cache
# randomHash=$(shuf -i 1000000000000-9999999999999 -n 1)
# hash="t=${randomHash}"
# {
#   echo -e "@font-face {font-family: \"${iconName}\";"
#   echo -e "  src: url('/${output}/${iconName}.eot?${hash}'); /* IE9*/"
#   echo -e "  src: url('/${output}/${iconName}.eot?${hash}#iefix') format('embedded-opentype'), /* IE6-IE8 */"
#   echo -e "  url('/${output}/${iconName}.woff2?${hash}') format('woff2'), /* chrome firefox */"
#   echo -e "  url('/${output}/${iconName}.woff?${hash}') format('woff'), /* chrome firefox */"
#   echo -e "  url('/${output}/${iconName}.ttf?${hash}') format('truetype'), /* chrome firefox opera Safari, Android, iOS 4.2+*/"
#   echo -e "  url('/${output}/${iconName}.svg?${hash}#${iconName}') format('svg'); /* iOS 4.1- */"
#   echo -e "}"
# } >> "${ROOT}/apps/${appName}/styles/font-icons/${iconName}.scss"

