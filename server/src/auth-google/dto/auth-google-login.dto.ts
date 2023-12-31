import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthGoogleLoginDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1ZjRiZjQ2ZTUyYjMxZDliNjI0OWY3MzA5YWQwMzM4NDAwNjgwY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDMzNDY0ODMyMTQ4LWlhYTFoNmo0M2x2azFodnB1bThpbzgwcnU4cGNmcmI3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAzMzQ2NDgzMjE0OC1pYWExaDZqNDNsdmsxaHZwdW04aW84MHJ1OHBjZnJiNy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNDYyMzA0MDIzMTY2MTc3ODEzNiIsImVtYWlsIjoia2hhbnRzZWl0aHV1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE2OTg5ODAxNjAsIm5hbWUiOiJLaGFudCBTaXRodSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKZnY2MElTNURWeFd5eDNzS1FnS2h0ZWJNajVELU9ZbXFMbWU4SXNaY0dUSGM9czk2LWMiLCJnaXZlbl9uYW1lIjoiS2hhbnQiLCJmYW1pbHlfbmFtZSI6IlNpdGh1IiwibG9jYWxlIjoiZW4tR0IiLCJpYXQiOjE2OTg5ODA0NjAsImV4cCI6MTY5ODk4NDA2MCwianRpIjoiYzFiYjZiZjY3ZDY4YmFiMjQ3NzM2YzAyNTYxZWVhZGIxNzk0OTExYyJ9.gzBzQbVg4ysaWmtW4PMZ8PYUIuKAWEuI08_VzFLqQicedoyqv_DLyI3acRaX7tNlN_0Bo3vUDTwi1G0HjS5VAEGrKmFrCDuA9iWnyu21s5MP_LDrCs26585UNRcLf9duzu0uRL0rkLzwCC8nitcKg9vIBjJLpHFeCmK2InnTL_Js5dpfTrg3eZCxw8BYFVlWzJ-4dVCjMv-2LZkIimWyMyaN4XNCsABSqW78ML18P_JyfAlqMs0i-oHatAV-Us40FW3l5oe5AahD0MfiWSLUQa9Cibq7v0PVqNXYcwNSnCq-QaKd-RT0CKNhibSDlM1kURYfDG3F_umPjSE8zJOFKg',
  })
  @IsNotEmpty()
  idToken: string;
}
