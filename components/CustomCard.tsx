import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
type objectFit = "cover" | "contain" | "fill" | "revert"

interface CustomCardProps {
    cardHeight: number;
    cardWidth: number;
    cardBackground: string;
    cardBorderRadius: number;
    cardPadding: number;
    title: string;
    content: string;
    date: string;
    image: string;
    imageTitle: string;
    imageHeight: number;
    objectFitOption: objectFit;
    titleVariant: TypographyVariant;
    contentVariant: TypographyVariant;
    timeVariants: TypographyVariant;
    bottomLeftDivContent: string;
    bottomLeftDivBackground: string;
    bottomRightDivContent: string;
    bottomRightDivBackground: string;
    textPrimaryColor: string;
    textSecondaryColor: string
}

const CustomCard: React.FC<CustomCardProps> = (
    {   title, content, image, imageTitle, imageHeight, textPrimaryColor, textSecondaryColor,
        cardWidth, cardHeight, cardBackground, cardPadding, objectFitOption, titleVariant,
        contentVariant, date, timeVariants, bottomLeftDivBackground, bottomLeftDivContent,
        bottomRightDivBackground, bottomRightDivContent, cardBorderRadius }
) => {

    const d1 = new Date(date).getTime();
    const d2 = Date.now();

    const differenceMilisec = d1 - d2;
    const differenceHours = differenceMilisec / 1000 / 3600;

    const day = Math.floor(differenceHours / 24)
    const hours = Math.floor(differenceHours % 24);
    const minutes = Math.floor(((differenceHours % 24 - hours) * 60));
    const seconds = Math.floor((((differenceHours % 24 - hours) * 60) - minutes) * 60);

    return (
        <Card sx={{ height: cardHeight, width: cardWidth, display: 'flex', justifyContent: 'center', padding:cardPadding, backgroundColor: cardBackground, borderRadius:cardBorderRadius }}>
            <CardContent sx={{ padding: 0, height: '100%', position: 'relative' }}>
                <CardMedia
                    sx={{ height: imageHeight, width: cardWidth, objectFit: objectFitOption ? objectFitOption : "cover" }}
                    image={image}
                    title={imageTitle}
                    component={"img"}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '15%', marginTop:1 }}>
                    <CardMedia
                        sx={{ height: 40, width: 40, borderRadius: 20 }}
                        image="https://t3.ftcdn.net/jpg/03/64/44/62/360_F_364446273_s5hEzzJtTDsi2vyOmWa51G4VsIRT6Ckp.jpg"
                        title="leftIcon"
                        component={"img"}
                    />
                    <CardMedia
                        sx={{ height: 20, width: 60, borderRadius: 5, objectFit: 'cover' }}
                        image="https://t3.ftcdn.net/jpg/03/64/44/62/360_F_364446273_s5hEzzJtTDsi2vyOmWa51G4VsIRT6Ckp.jpg"
                        title="leftIcon"
                        component={"img"}
                    />
                </CardContent>
                <CardContent sx={{ padding: 1, width: '100%', height: '15%' }}>
                    <Typography variant={titleVariant ? titleVariant : "h5"} component="div" color={textPrimaryColor}>
                        {title}
                    </Typography>
                    <Typography variant={contentVariant ? contentVariant : "body2"} color={textSecondaryColor}>
                        {content}
                    </Typography>
                </CardContent>
                {date ?
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', maxWidth: cardWidth, height: '15%', marginTop:1 }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position:'relative', width:cardWidth }}>
                            <Typography variant={timeVariants ? timeVariants : "h1"} sx={{ fontWeight:'bold', position:'absolute', left:30, top:25}} component="div" color={textPrimaryColor}>
                                {day}
                            </Typography>
                            <Typography variant={timeVariants ? timeVariants : "h1"} sx={{fontWeight:'bold', position:'absolute', right:30, top:25}} component="div" color={textPrimaryColor}>
                                {hours}:
                                {minutes}:
                                {seconds}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ position:'absolute', left:25, top:50}} color={textSecondaryColor}>
                                Gün
                            </Typography>
                            <Typography variant="subtitle2" sx={{ position:'absolute', right:40, top:50}} color={textSecondaryColor}>
                                Sa. Dk. Sn.
                            </Typography>
                        </CardContent>
                    </CardContent>
                    :
                    null
                }
                <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'end', maxWidth: cardWidth, width: '100%', height: '15%', padding: 0, position: 'absolute', bottom: 0, left: 0 }}>
                    <Typography sx={{ width: '40%', height: "50%", backgroundColor: bottomLeftDivBackground, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, left: 0 }} variant={contentVariant ? contentVariant : "h1"} component="div" color={textPrimaryColor}>
                        {bottomLeftDivContent}
                    </Typography>
                    <Typography sx={{ width: '60%', height: "50%", backgroundColor: bottomRightDivBackground, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: 0 }} variant={contentVariant ? contentVariant : "h1"} component="div" color={textPrimaryColor}>
                        {bottomRightDivContent}
                    </Typography>
                </CardContent>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
