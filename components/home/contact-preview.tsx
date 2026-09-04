'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4">
                <SectionHeader
                    title="Get In Touch"
                    description="Feel free to reach out!"
                    className="text-center"
                />

                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto mt-10"
                >
                    <Card className="card-gradient">
                        <CardContent className="p-8 flex flex-col items-center text-center">
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
            </div>
        </section>
    );
}