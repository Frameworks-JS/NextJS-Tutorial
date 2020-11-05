// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  first_name: string
  last_name?: string 
  picture?: string 
  headline?: string 
  city: any 
  country: null
  website: any
  linkedin: any
  twitter: any
  bio: any
  registration_blocked: boolean
}
