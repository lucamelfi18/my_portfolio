'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
    return (
        <div className="py-16 md:py-24">
            <div className="container">
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    animate="show"
                    className="max-w-2xl mx-auto"
                >
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                        <p className="text-lg text-muted-foreground">
                            Have a question or want to work together? Feel free to reach out!
                        </p>
                    </motion.div>

                    <motion.div variants={fadeIn('up', 0.3)}>
                        <Card className="card-gradient h-full">
                            <CardContent className="p-8 sm:p-12 flex flex-col items-center text-center">
                                <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
                                <div className="space-y-6 text-lg">
                                    <div className="flex items-center justify-center">
                                        <Phone className="h-6 w-6 text-primary mr-4" />
                                        <p className="text-muted-foreground">508-439-7281</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-primary mr-4" />
                                        <p className="text-muted-foreground">lmelfi@andrew.cmu.edu</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-primary mr-4" />
                                        <p className="text-muted-foreground">Pittsburgh, PA and Bedford, MA</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}