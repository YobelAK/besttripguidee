import React from 'react';
import { Paper, Stack, Title, Group, Text, Divider, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

interface BookingSummaryProps {
  trip?: string;
  departureDate?: string;
  passengers?: string;
  passengerPrice?: number;
  portFee?: number;
  addOns?: Array<{
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
  }>;
  nextStep?: string;
  nextStepLabel?: string;
  showContinueButton?: boolean;
  buttonText?: string;
  onContinue?: () => void;
}

export function BookingSummary({ 
  trip = 'Ubud Cultural Highlights — Full Day',
  departureDate = '12 Oct 2025, 08:00 AM',
  passengers = '2 Adults',
  passengerPrice = 450000,
  portFee = 50000,
  addOns = [],
  nextStep = '/tour/book/addons', 
  nextStepLabel = 'Continue',
  showContinueButton = true,
  buttonText,
  onContinue
}: BookingSummaryProps) {
  const addOnsTotal = addOns.reduce((total, addOn) => total + addOn.price, 0);
  const totalPrice = passengerPrice + portFee + addOnsTotal;

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
  };

  return (
    <Paper shadow="sm" radius="lg" bg="white" p="xl" style={{ position: 'sticky', top: 24 }}>
      <Stack gap="xl">
        <Title order={2} size="lg" fw={600} c="dark">
          Booking Summary
        </Title>
        
        <Stack gap="md">
          <Group justify="space-between" align="flex-start">
            <Text size="sm" c="dimmed">Trip</Text>
            <Text size="sm" fw={500} c="dark" ta="right">
              {trip}
            </Text>
          </Group>
          <Group justify="space-between" align="flex-start">
            <Text size="sm" c="dimmed">Departure Date</Text>
            <Text size="sm" fw={500} c="dark">
              {departureDate}
            </Text>
          </Group>
          <Group justify="space-between" align="flex-start">
            <Text size="sm" c="dimmed">Passengers</Text>
            <Text size="sm" fw={500} c="dark">{passengers}</Text>
          </Group>
        </Stack>
        
        <Divider />
        
        <Stack gap="sm">
          <Group justify="space-between" align="center">
            <Text size="sm" c="#374151">{passengers} (Standard Package)</Text>
            <Text size="sm" fw={500} c="dark">IDR {passengerPrice.toLocaleString('id-ID')}</Text>
          </Group>
          <Group justify="space-between" align="center">
            <Text size="sm" c="#374151">Service Fee</Text>
            <Text size="sm" fw={500} c="dark">IDR {portFee.toLocaleString('id-ID')}</Text>
          </Group>
          {addOns.map((addOn) => (
            <Group key={addOn.id} justify="space-between" align="center">
              <Text size="sm" c="#374151">{addOn.title}</Text>
              <Text size="sm" fw={500} c="dark">IDR {addOn.price.toLocaleString('id-ID')}</Text>
            </Group>
          ))}
        </Stack>
         
         <Divider />
         
         <Stack gap="xs">
           <Group justify="space-between" align="center">
             <Text size="md" fw={600} c="dark">Total</Text>
             <Text size="lg" fw={700} c="dark">IDR {totalPrice.toLocaleString('id-ID')}</Text>
           </Group>
           <Text size="xs" c="dimmed">
             All prices include tax and handling fee.
           </Text>
         </Stack>
         
         {showContinueButton && (
           <>
             {onContinue ? (
               <Button
                 onClick={handleContinue}
                 fullWidth
                 size="md"
                 radius="lg"
                 rightSection={<IconChevronRight size={20} />}
                 styles={{
                   root: {
                     backgroundColor: '#284361',
                     '&:hover': { backgroundColor: '#0075ff' },
                     fontWeight: 600,
                     padding: '12px 24px'
                   }
                 }}
               >
                 {buttonText || nextStepLabel}
               </Button>
             ) : (
               <Link href={nextStep}>
                 <Button
                   fullWidth
                   size="md"
                   radius="lg"
                   rightSection={<IconChevronRight size={20} />}
                   styles={{
                     root: {
                       backgroundColor: '#284361',
                       '&:hover': { backgroundColor: '#0075ff' },
                       fontWeight: 600,
                       padding: '12px 24px'
                     }
                   }}
                 >
                   {buttonText || nextStepLabel}
                 </Button>
               </Link>
             )}
           </>
         )}
       </Stack>
     </Paper>
   );
}